import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Page404 from '.';

describe('Page404', () => {
  it('Snapshot test', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
