import { api } from '@/services/axiosConfig';
import { TMovieList } from '@/store/modules/movieList/types';
import { AxiosResponse } from 'axios';
import { TApiEndpoints, TApiMethods } from './types';

export const useAxiosRequest = async (
  apiEndpoint: TApiEndpoints,
  method: TApiMethods
): Promise<AxiosResponse<{ data: TMovieList }, TMovieList>> => {
  if (method === 'get') {
    return api.get(apiEndpoint).then((response) => response);
  }

  throw new Error('Invalid method');
};
