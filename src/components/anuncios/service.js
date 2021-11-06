import client from '../../api/client';

const anunciosBaseUrl = '/api';

export const getLatestAnuncios = () => {
  const url = `${anunciosBaseUrl}/anuncios?_expand=user&_embed=likes&_sort=updatedAt&_order=desc`;
  return client.get(url);
};

export const createAnuncio = anuncio => {
  const url = `${anunciosBaseUrl}/anuncios`;
  return client.post(url, anuncio);
};

export const getAnuncio = anuncioId => {
  const url = `${anunciosBaseUrl}/anuncios/${anuncioId}`;
  return client.get(url);
};

