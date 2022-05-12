import { api } from 'Root/services/axiosConfig';
import { TMovieObject } from 'Root/store/modules/movieList/types';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { DELETE, GET, POST, PUT } from './constants';
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
  if (method === GET) {
    return api.get<IMoviesApiResponse>(apiEndpoint).then(handleRequestStatus);
  }

  if (method === POST) {
    return api.post(apiEndpoint, movie).then(handleRequestStatus);
  }

  if (method === PUT) {
    return api.put(apiEndpoint, movie).then(handleRequestStatus);
  }

  if (method === DELETE) {
    return api.delete(apiEndpoint).then(handleRequestStatus);
  }

  throw new Error('Invalid method');
};
