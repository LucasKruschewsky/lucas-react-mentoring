import { TMovieList, TMovieObject } from '@/store/modules/movieList/types';

export type TApiEndpoints = string;
export type TApiMethods = 'get' | 'delete' | 'put' | 'post';
export interface IMoviesApiResponse {
  data: TMovieList | TMovieObject;
  limit: number;
  offset: number;
  totalAmount: number;
}
