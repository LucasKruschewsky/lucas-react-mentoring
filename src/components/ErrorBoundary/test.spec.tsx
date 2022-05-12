/* eslint-disable no-console */
import * as React from 'react';
import ErrorBoundary from 'Components/ErrorBoundary';
import { render } from '@testing-library/react';
import prepareTestEnv from 'Root/functions/prepareTestEnv';

describe('ErrorBoundary', () => {
  prepareTestEnv();

  // Prevent expected error to show in the console
  const spiedConsoleMock = jest.spyOn(console, 'error');
  beforeAll(() => {
    spiedConsoleMock.mockImplementation(() => {});
  });
  afterAll(() => {
    spiedConsoleMock.mockRestore();
  });

  afterEach(() => {
    spiedConsoleMock.mockClear();
  });

  it('No error message if there is no error in child component', () => {
    const { queryByTestId } = render(
      <ErrorBoundary>
        <div />
      </ErrorBoundary>
    );

    const ErrorBoundaryContainer = queryByTestId('ErrorBoundaryContainer');
    expect(ErrorBoundaryContainer).not.toBeTruthy();
  });

  it('No error message if there is no error in child component', () => {
    const FaultyComponent: React.FunctionComponent<{}> = () => {
      throw new Error();
    };

    const { queryByTestId } = render(
      <ErrorBoundary>
        <FaultyComponent />
      </ErrorBoundary>
    );

    const ErrorBoundaryContainer = queryByTestId('ErrorBoundaryContainer');
    expect(ErrorBoundaryContainer).toBeTruthy();
  });
});
