import * as React from 'react';
import { ISetStateBoolean } from 'Global/types/globalTypes';
import { openModal } from '@/store/modules/modal';
import { TCurrentModalState } from '@/store/modules/modal/types';
import { TStoreDispatch } from '@/store/types';
import { TMovieObject } from '@/store/modules/movieList/types';

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
              modalType: 'edit',
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
            modalType: 'delete',
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
