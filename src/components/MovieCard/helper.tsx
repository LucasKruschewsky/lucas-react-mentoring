import * as React from 'react';
import { ISetStateBoolean } from 'Global/types/globalTypes';
import { openModal } from 'Root/store/modules/modal';
import { TCurrentModalState } from 'Root/store/modules/modal/types';
import { TStoreDispatch } from 'Root/store/types';
import { TMovieObject } from 'Root/store/modules/movieList/types';
import { DELETE, EDIT } from 'Root/store/modules/modal/constants';

export const menuItems: ['Edit', 'Delete'] = ['Edit', 'Delete'];

export const OpenModalFromMenuItem = (
  setMovieMenuOpen: ISetStateBoolean,
  dispatch: TStoreDispatch,
  { modalType, movieId }: TCurrentModalState
): void => {
  setMovieMenuOpen(false);
  dispatch(openModal({ modalType, movieId }));
};

export const buildMenuItems = (
  setMovieMenuOpen: ISetStateBoolean,
  dispatch: TStoreDispatch,
  id: TMovieObject['id']
): React.ReactElement[] =>
  menuItems.map((item) => {
    if (item === 'Edit') {
      return (
        <button
          type="button"
          onClick={() =>
            OpenModalFromMenuItem(setMovieMenuOpen, dispatch, {
              modalType: EDIT,
              movieId: id,
            })
          }
          className="movie-options-menu-item"
          key={item}
        >
          {item}
        </button>
      );
    }

    // Return if item === 'Delete'
    return (
      <button
        type="button"
        onClick={() =>
          OpenModalFromMenuItem(setMovieMenuOpen, dispatch, {
            modalType: DELETE,
            movieId: id,
          })
        }
        className="movie-options-menu-item"
        key={item}
      >
        {item}
      </button>
    );
  });
