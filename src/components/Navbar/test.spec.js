import { fireEvent, render, waitFor } from '@testing-library/react';
import Navbar from 'Components/Navbar';
import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'Root/store';
import prepareTestEnv from 'Root/functions/prepareTestEnv';
import { act } from 'react-dom/test-utils';

describe('Navbar', () => {
  prepareTestEnv();

  it('Adds background class on navbar when scroll > 0', async () => {
    const { queryByTestId } = render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );
    const NavbarContainer = queryByTestId('NavbarContainer');

    expect(NavbarContainer.classList).not.toContain('navbarBackground');

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 100 } });
    });
    await waitFor(() => {
      expect(NavbarContainer.classList).toContain('navbarBackground');
    });
  });

  it('Removes background class on navbar when scroll reaches 0', async () => {
    const { queryByTestId } = render(
      <Provider store={createStore()}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </Provider>
    );
    const NavbarContainer = queryByTestId('NavbarContainer');

    expect(NavbarContainer.classList).not.toContain('navbarBackground');

    act(() => {
      fireEvent.scroll(window, { target: { scrollY: 0 } });
    });
    await waitFor(() => {
      expect(NavbarContainer.classList).not.toContain('navbarBackground');
    });
  });
});
