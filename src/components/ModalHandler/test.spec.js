import * as React from 'react';
import { render } from '@testing-library/react';
import prepareTestEnv from 'Root/functions/prepareTestEnv';
import { MemoryRouter } from 'react-router-dom';
import ModalHandler from '.';

jest.mock('react-redux', () => ({
  useDispatch: () => ({}),
  useSelector: () => ({
    modalType: 'add',
    movieId: 0,
  }),
}));

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

  it('Modal Handler shows modal when passed a modalType and movieId', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ModalHandler targetRenderedDiv={modalContainer} />
      </MemoryRouter>
    );

    const Modal = getByTestId('ModalFormTitle');

    expect(Modal).toBeTruthy();
  });
});
