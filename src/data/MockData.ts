import 'Images/movie-1.png';
import 'Images/movie-2.png';
import 'Images/movie-3.png';
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
    image: 'images/movie-2.png',
    rating: 8.9,
    duration: '2h 07min',
    description: 'Movie 02 Description goes here',
    id: 2,
  },
  {
    name: 'Pulp Fiction',
    genre: 'Crime',
    year: 2003,
    image: 'images/movie-1.png',
    rating: 9.5,
    duration: '2h 34min',
    description: 'Movie 01 Description goes here',
    id: 1,
  },
  {
    name: 'Bill: Vol. 2',
    genre: 'Horror',
    year: 1994,
    image: 'images/movie-3.png',
    rating: 9.2,
    duration: '1h 57min',
    description: 'Movie 03 Description goes here',
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
