import { api } from '@/services/axiosConfig';
import { TMovieObject } from '@/store/modules/movieList/types';
import { AxiosResponse } from 'axios';
import { IMoviesApiResponse, TApiEndpoints, TApiMethods } from './types';

export const axiosRequest = async (
  apiEndpoint: TApiEndpoints,
  method: TApiMethods,
  movie: TMovieObject = null
): Promise<AxiosResponse<IMoviesApiResponse>> => {
  if (method === 'get') {
    return api
      .get<IMoviesApiResponse>(apiEndpoint)
      .then((response) => response);
  }

  if (method === 'post') {
    return api.post(apiEndpoint, movie).then((response) => response);
  }

  if (method === 'put') {
    return api.put(apiEndpoint, movie).then((response) => response);
  }

  if (method === 'delete') {
    return api.delete(apiEndpoint).then((response) => response);
  }

  throw new Error('Invalid method');
};
