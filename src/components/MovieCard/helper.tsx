import * as React from 'react';
import { ISetStateBoolean } from 'Global/types/globalTypes';
import { IModalReturn } from '@/store/modules/modal/types';

export const menuItems: ['Edit', 'Delete'] = ['Edit', 'Delete'];

export const OpenModalFromMenuItem = (
  setModalOpen: IModalReturn['openEditModal'] | IModalReturn['openDeleteModal'],
  setMovieMenuOpen: ISetStateBoolean
): void => {
  setMovieMenuOpen(false);
  setModalOpen();
};

export const buildMenuItems = (
  openDeleteModal: IModalReturn['openDeleteModal'],
  openEditModal: IModalReturn['openEditModal'],
  setMovieMenuOpen: ISetStateBoolean
): React.ReactElement[] =>
  menuItems.map((item) => {
    if (item === 'Edit') {
      return (
        <button
          type="button"
          onClick={() => OpenModalFromMenuItem(openEditModal, setMovieMenuOpen)}
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
        onClick={() => OpenModalFromMenuItem(openDeleteModal, setMovieMenuOpen)}
        className="movie-options-menu-item"
        key={item}
      >
        {item}
      </button>
    );
  });
