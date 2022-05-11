import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import prepareTestEnv from 'Root/functions/prepareTestEnv';
import Footer from '.';

describe('Footer', () => {
  prepareTestEnv();

  it('Snapshot test', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
