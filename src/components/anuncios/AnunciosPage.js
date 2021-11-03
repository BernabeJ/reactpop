import { useEffect, useState } from 'react';
import { getLatestAnuncios } from './service';




function AnunciosPage () {
    const [anuncios, setAnuncios] = useState([]);
    useEffect(() => {
        getLatestAnuncios().then(setAnuncios)
    },[])
    return <div className='anunciosPage'>
        <ul>
            {anuncios.map(anuncio => (<li key={anuncio.id}>{ anuncio.nombre}</li>))}
        </ul>
    </div>
}
    
export default AnunciosPage;