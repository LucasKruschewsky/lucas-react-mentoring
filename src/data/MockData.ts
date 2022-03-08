import * as Movie1 from 'Images/movie-1.png';
import * as Movie2 from 'Images/movie-2.png';
import * as Movie3 from 'Images/movie-3.png';
import {
  IMoviesListData,
  IMovieFormFields,
  IGenreFilterList,
} from './MockedDataTypes';

const genreFilterList: IGenreFilterList = [
  'All',
  'Documentary',
  'Comedy',
  'Horror',
  'Crime',
];

const moviesList: IMoviesListData[] = [
  {
    name: 'Bohemian Rhapsody',
    genre: 'Comedy',
    year: 2004,
    image: Movie2,
    id: 2,
  },
  {
    name: 'Pulp Fiction',
    genre: 'Crime',
    year: 2003,
    image: Movie1,
    id: 1,
  },
  {
    name: 'Bill: Vol. 2',
    genre: 'Horror',
    year: 1994,
    image: Movie3,
    id: 3,
  },
];

const movieFormFields: IMovieFormFields = {
  addAndEdit: [
    {
      label: 'Title',
      type: 'text',
      placeholder: 'Movie Title',
    },
    {
      label: 'Release Date',
      type: 'date',
      placeholder: 'Select Date',
    },
    {
      label: 'Movie Url',
      type: 'text',
      placeholder: 'https://',
    },
    {
      label: 'Rating',
      type: 'text',
      placeholder: '7.8',
    },
    {
      label: 'Genre',
      type: 'select',
      placeholder: 'Select Genre',
    },
    {
      label: 'Runtime',
      type: 'text',
      placeholder: 'minutes',
    },
    {
      label: 'Overview',
      type: 'textarea',
      placeholder: 'Movie Description',
    },
  ],
};

export { moviesList, genreFilterList, movieFormFields };
