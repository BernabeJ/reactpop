import React from "react";
import { Redirect } from "react-router";
import Layout from "../../layout/Layout";
import { getAnuncio } from "../service";


class AnuncioDetailPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            anuncio: null,
            error:null,
        }
    };

     handleGetAnuncio = anuncioId => {
        getAnuncio(anuncioId)
        .then(anuncio => this.setState({ anuncio }))
        .catch(error => this.setState({ error }));
       
  };

     componentDidMount() {
    const { match } = this.props;
    this.handleGetAnuncio(match.params.anuncioId);
  }

  componentDidUpdate(prevProps, prevState) {
    const { match } = this.props;
    if (prevProps.match.params.anuncioId !== match.params.anuncioId) {
      this.handleGetAnuncio(match.params.anuncioId);
    }
  }

  componentWillUnmount() {}



    render() {
        const { anuncio, error } = this.props;
        console.log(anuncio)
        if (error?.status === 404) {
            return <Redirect to="/404" />;
        }
        return (
        <Layout title="Detalle">
            <div>{JSON.stringify(anuncio)}</div>
        </Layout>
    )
        
    }
}



export default AnuncioDetailPage;