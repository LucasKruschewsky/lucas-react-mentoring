import * as React from 'react';

export const menuItems: string[] = ['Edit', 'Delete'];

export const OpenModalFromMenuItem = (
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setMovieMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  setMovieMenuOpen(false);
  setModalOpen(true);
};

export const ShowMenuItems = (
  setIsDeleteMovieOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setIsEditMovieOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setMovieMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
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
