import * as React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render, waitFor } from '@testing-library/react';
import prepareTestEnv from 'Root/functions/prepareTestEnv';
import { act } from 'react-dom/test-utils';
import HomepageBanner from '.';

const mockedNavigation = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigation,
  createSearchParams: () => '',
  useParams: () => ({}),
  useSearchParams: () => [{ has: jest.fn() }],
  MemoryRouter: (children) => <div>{children}</div>,
}));

describe('HomepageBanner', () => {
  prepareTestEnv();
  it('Snapshot test', () => {
    const tree = renderer.create(<HomepageBanner />).toJSON;
    expect(tree).toMatchSnapshot();
  });

  it('Input value changes onChange event', async () => {
    const { queryByTestId } = render(<HomepageBanner />);
    const searchInput = queryByTestId('BannerSearchField');
    const searchButton = queryByTestId('searchFieldButton');

    act(() => {
      fireEvent.change(searchInput, { target: { value: 'Star Wars' } });
      fireEvent.click(searchButton);
    });

    await waitFor(() => {
      expect(searchInput.value).toBe('Star Wars');
    });

    await waitFor(() => {
      expect(mockedNavigation).toHaveBeenCalled();
    });
  });
});
