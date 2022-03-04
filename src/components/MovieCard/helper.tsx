import * as React from 'react';
import { ISetStateBoolean } from 'Global/types/globalTypes';

export const menuItems: string[] = ['Edit', 'Delete'];

export const OpenModalFromMenuItem = (
  setModalOpen: ISetStateBoolean,
  setMovieMenuOpen: ISetStateBoolean
): void => {
  setMovieMenuOpen(false);
  setModalOpen(true);
};

export const buildMenuItems = (
  setIsDeleteMovieOpen: ISetStateBoolean,
  setIsEditMovieOpen: ISetStateBoolean,
  setMovieMenuOpen: ISetStateBoolean
): React.ReactElement[] =>
  menuItems.map((item) => {
    if (item === 'Edit') {
      return (
        <button
          type="button"
          onClick={() =>
            OpenModalFromMenuItem(setIsEditMovieOpen, setMovieMenuOpen)
          }
          className="movie-options-menu-item"
          key={item}
        >
          {item}
        </button>
      );
    }

    if (item === 'Delete') {
      return (
        <button
          type="button"
          onClick={() =>
            OpenModalFromMenuItem(setIsDeleteMovieOpen, setMovieMenuOpen)
          }
          className="movie-options-menu-item"
          key={item}
        >
          {item}
        </button>
      );
    }

    return <div />;
  });
