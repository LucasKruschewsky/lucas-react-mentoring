import { api } from '@/services/axiosConfig';
import { TApiEndpoints, TApiMethods } from './types';

export const useAxiosRequest = async (
  apiEndpoint: TApiEndpoints,
  method: TApiMethods
): Promise<any> => {
  if (method === 'get') {
    return api.get<any>(apiEndpoint).then((response) => response);
  }

  throw new Error('Invalid method');
};
