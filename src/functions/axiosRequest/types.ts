import { TMovieList } from '@/store/modules/movieList/types';
import { AxiosRequestConfig } from 'axios';

export type TApiEndpoints = string;
export type TApiMethods = 'get' | 'delete' | 'put' | 'post';
export interface IMoviesApiResponse {
  data: TMovieList;
  limit: number;
  offset: number;
  totalAmount: number;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
}
