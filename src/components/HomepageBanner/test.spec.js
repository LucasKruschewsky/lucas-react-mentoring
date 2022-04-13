import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

// Components
import HomepageBanner from '.';

test('Snapshot test', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <HomepageBanner />
    </BrowserRouter>
  ).toJSON;
  expect(tree).toMatchSnapshot();
});
