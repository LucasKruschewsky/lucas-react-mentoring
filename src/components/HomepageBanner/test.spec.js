import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { fireEvent, render, waitFor } from '@testing-library/react';
import prepareTestEnv from 'Root/functions/prepareTestEnv';
import HomepageBanner from '.';

describe('HomepageBanner', () => {
  prepareTestEnv();
  it('Snapshot test', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <HomepageBanner />
      </MemoryRouter>
    ).toJSON;
    expect(tree).toMatchSnapshot();
  });

  it('Input value changes onChange event', async () => {
    const { queryByTestId } = render(
      <MemoryRouter>
        <HomepageBanner />
      </MemoryRouter>
    );

    const searchInput = queryByTestId('BannerSearchField');
    fireEvent.change(searchInput, { target: { value: 'Star Wars' } });

    await waitFor(() => expect(searchInput.value).toBe('Star Wars'));
  });
});
