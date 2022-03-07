import { IMoviesListData } from '@/data/MockedDataTypes';
import { Dispatch, SetStateAction } from 'react';

export interface INavbarProps {
  selectedMovie: IMoviesListData;
  setSelectedMovie: Dispatch<SetStateAction<object>>;
}
