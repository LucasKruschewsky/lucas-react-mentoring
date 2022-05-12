import * as React from 'react';
import prepareTestEnv from 'Root/functions/prepareTestEnv';
import AppModal from 'Components/AppModal';
import MovieForm from 'Components/MovieForm';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'Root/store';
import { MemoryRouter } from 'react-router-dom';

describe('ModalHandler', () => {
  let modalContainer = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    modalContainer = document.createElement('div');
    document.body.appendChild(modalContainer);
  });

  afterEach(() => {
    // cleanup on exiting
    modalContainer.remove();
    modalContainer = null;
  });

  prepareTestEnv();
  const closeCurrentModal = jest.fn();

  it('Open Add modal when add modalType is provided', () => {
    const modalType = 'add';
    const movieId = null;

    const { queryByTestId } = render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <AppModal
            targetRenderedDiv={modalContainer}
            showModal={Boolean(modalType)}
            closeModal={closeCurrentModal}
          >
            <MovieForm movieId={movieId} type={modalType} />
          </AppModal>
        </MemoryRouter>
      </Provider>
    );

    const formTitle = queryByTestId('ModalFormTitle');

    expect(formTitle).toHaveTextContent('Add Movie');
  });

  it('Open Delete modal when delete modalType is provided', () => {
    const modalType = 'delete';
    const movieId = null;

    const { queryByTestId } = render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <AppModal
            targetRenderedDiv={modalContainer}
            showModal={Boolean(modalType)}
            closeModal={closeCurrentModal}
          >
            <MovieForm movieId={movieId} type={modalType} />
          </AppModal>
        </MemoryRouter>
      </Provider>
    );

    const formTitle = queryByTestId('ModalFormTitle');

    expect(formTitle).toHaveTextContent('Delete Movie');
  });

  it('Open Edit modal when edit modalType is provided', () => {
    const modalType = 'edit';
    const movieId = null;

    const { queryByTestId } = render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <AppModal
            targetRenderedDiv={modalContainer}
            showModal={Boolean(modalType)}
            closeModal={closeCurrentModal}
          >
            <MovieForm movieId={movieId} type={modalType} />
          </AppModal>
        </MemoryRouter>
      </Provider>
    );

    const formTitle = queryByTestId('ModalFormTitle');

    expect(formTitle).toHaveTextContent('Edit Movie');
  });
});
