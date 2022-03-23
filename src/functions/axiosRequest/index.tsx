import { api } from '@/services/axiosConfig';
import { TMovieObject } from '@/store/modules/movieList/types';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { IMoviesApiResponse, TApiEndpoints, TApiMethods } from './types';

const handleRequestStatus = (response: AxiosResponse): AxiosResponse => {
  if (response.status >= 400) {
    response.data.messages.map((message: string) => toast.error(message));
  }

  return response;
};

/**
 * This function will receive an api endpoint, an axios method and
 * a object to be added/modified (only on put/delete/post)
 * and will return an axios response. If the response has a status
 * equal or higher then 400, it will also run a toast notification
 * for each error message inside the response
 * @param apiEndpoint
 * @param method (Axios methods)
 * @param movie (Object on post/put/delete)
 * @returns an axios response
 */
export const axiosRequest = async (
  apiEndpoint: TApiEndpoints,
  method: TApiMethods,
  movie: TMovieObject = null
): Promise<AxiosResponse<IMoviesApiResponse>> => {
  if (method === 'get') {
    return api.get<IMoviesApiResponse>(apiEndpoint).then(handleRequestStatus);
  }

  if (method === 'post') {
    return api.post(apiEndpoint, movie).then(handleRequestStatus);
  }

  if (method === 'put') {
    return api.put(apiEndpoint, movie).then(handleRequestStatus);
  }

  if (method === 'delete') {
    return api.delete(apiEndpoint).then(handleRequestStatus);
  }

  throw new Error('Invalid method');
};
