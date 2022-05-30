import * as fetch from 'isomorphic-fetch';

export const fetchMoviesOnServer = (
  queryString: string = null
): Promise<any> => {
  const encodedURI = encodeURI(
    `${process.env.API_URL}/movies${
      queryString ? `?search=${queryString}&searchBy=title` : ''
    }`
  );

  return fetch(encodedURI)
    .then((data) => data.json())
    .then((movies) => movies);
};
