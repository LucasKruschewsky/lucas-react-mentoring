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
    title: 'Bohemian Rhapsody',
    genres: ['Comedy'],
    release_date: 2004,
    poster_path: 'images/movie-2.png',
    vote_average: 8.9,
    runtime: 180,
    overview: 'Movie 02 Description goes here',
    id: 2,
  },
  {
    title: 'Pulp Fiction',
    genres: ['Crime'],
    release_date: 2003,
    poster_path: 'images/movie-1.png',
    vote_average: 9.5,
    runtime: 210,
    overview: 'Movie 01 Description goes here',
    id: 1,
  },
  {
    title: 'Bill: Vol. 2',
    genres: ['Horror'],
    release_date: 1994,
    poster_path: 'images/movie-3.png',
    vote_average: 9.2,
    runtime: 93,
    overview: 'Movie 03 Description goes here',
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
