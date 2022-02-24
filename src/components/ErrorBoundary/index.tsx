import * as React from 'react';
import { Component } from 'react';
import { ErrorInnerContainer, ErroOuterContainer } from './styles';

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error;
  errorInfo: React.ErrorInfo;
}

interface ErrorBoundaryProps {}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(
    error: ErrorBoundaryState['error'],
    errorInfo: ErrorBoundaryState['errorInfo']
  ) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    const { children } = this.props;
    const { hasError, error, errorInfo } = this.state;

    if (hasError) {
      return (
        <ErroOuterContainer>
          <ErrorInnerContainer>
            <h1>Whoops, something went wrong...</h1>
            <p>{error && error.toString()}</p>
            <p> {errorInfo.componentStack}</p>
          </ErrorInnerContainer>
        </ErroOuterContainer>
      );
    }

    return children;
  }
}
