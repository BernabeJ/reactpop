import client from '../../api/client';

const anunciosBaseUrl = '/api';

export const getLatestAnuncios = () => {
    const url = `${anunciosBaseUrl}/anuncios`;
    return client.get(url);
};

