import { Dispatch, SetStateAction } from 'react';
import { IMoviesListData } from '@/data/MockedDataTypes';

export interface IHomepageProps {
  selectedMovie: IMoviesListData;
  setSelectedMovie: Dispatch<SetStateAction<object>>;
}
