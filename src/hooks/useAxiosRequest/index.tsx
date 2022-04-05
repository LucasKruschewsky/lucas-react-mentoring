import { api } from '@/services/axiosConfig';
import { AxiosResponse } from 'axios';
import { IMoviesApiResponse, TApiEndpoints, TApiMethods } from './types';

export const useAxiosRequest = async (
  apiEndpoint: TApiEndpoints,
  method: TApiMethods
): Promise<AxiosResponse<IMoviesApiResponse>> => {
  if (method === 'get') {
    return api
      .get<IMoviesApiResponse>(apiEndpoint)
      .then((response) => response);
  }

  throw new Error('Invalid method');
};
