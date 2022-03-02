import * as React from 'react';

export interface IHomepageProps {
  setIsDeleteMovieOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditMovieOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
