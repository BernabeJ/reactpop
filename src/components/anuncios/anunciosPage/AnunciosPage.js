import { useEffect, useState } from 'react';
import { getLatestAnuncios } from '../service';
import { Button } from '../../commons';
import Layout from '../../layout/Layout';
import  styles from './AnuncioPage.module.css'
import { Link } from 'react-router-dom';
import Anuncio from './Anuncio';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first anuncio!</p>
    <Button as={Link} to="/anuncios/new" variant="primary">
      Anuncio
    </Button>
  </div>
);



function AnunciosPage({history, ...props}) {
    const [anuncios, setAnuncios] = useState([]);
    useEffect(() => {
        getLatestAnuncios().then(anuncios=>setAnuncios(anuncios))
    },[])
   
     return (
    <Layout title="What's going on..." {...props}>
      <div className={styles.anunciosPage}>
        {anuncios.length ? (
          <ul className="anunciosList">
            {anuncios.map(({ id, ...anuncio }) => (
              <li key={id}>
                <Link to={`/anuncios/${id}`}>
                  <Anuncio {...anuncio} />
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    </Layout>
  );
}

    
export default AnunciosPage;