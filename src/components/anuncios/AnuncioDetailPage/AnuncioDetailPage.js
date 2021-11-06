import Layout from "../../layout/Layout";


function AnuncioDetailPage({match}) {
    return (
        <Layout title="Detalle">
            <div>Detalle de Anuncio{ match.params.anuncioId}</div>
        </Layout>
    );
}

export default AnuncioDetailPage;