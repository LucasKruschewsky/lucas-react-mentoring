import { api } from '@/services/axiosConfig';
import * as React from 'react';
import { TApiEndpoints, TApiMethods } from './types';

export const useAxiosRequest = (
  apiEndpoint: TApiEndpoints,
  method: TApiMethods,
  setComponentState: React.Dispatch<React.SetStateAction<object>>
): void => {
  React.useEffect(() => {
    if (method === 'get') {
      api
        .get<any>(apiEndpoint)
        .then((response) => setComponentState(response.data.data));
    }
  }, [method, apiEndpoint, setComponentState]);
};
