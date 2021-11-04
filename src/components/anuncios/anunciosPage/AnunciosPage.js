import { useEffect, useState } from 'react';
import { getLatestAnuncios } from '../service';
import classNames from 'classnames';
import Layout from '../../layout/Layout';
import  styles from './AnuncioPage.module.css'



function AnunciosPage(props) {
    const [anuncios, setAnuncios] = useState([]);
    useEffect(() => {
        getLatestAnuncios().then(setAnuncios)
    },[])
    const style = {
        backgroundColor: '#fff',
    
    }
    return (
        <Layout title="What's goin on..." {...props}>
            <div className={styles.anunciosPage}>
                Ultimos Anuncios
            <ul style={style}>
                {anuncios.map(anuncio => (<li key={anuncio.id}>{ anuncio.nombre}</li>))}
            </ul>
        </div>
            </Layout>
    )
}
    
export default AnunciosPage;