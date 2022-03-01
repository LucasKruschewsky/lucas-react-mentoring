import * as Movie1 from 'Images/movie-1.png';
import * as Movie2 from 'Images/movie-2.png';
import * as Movie3 from 'Images/movie-3.png';

const genreFilterList = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const moviesList = [
  {
    name: 'Pulp Fiction',
    genre: 'Crime',
    year: 2004,
    image: Movie1,
    id: 1,
  },
  {
    name: 'Bohemian Rhapsody',
    genre: 'Comedy',
    year: 2003,
    image: Movie2,
    id: 2,
  },
  {
    name: 'Bill: Vol. 2',
    genre: 'Horror',
    year: 1994,
    image: Movie3,
    id: 3,
  },
];

export { moviesList, genreFilterList };
