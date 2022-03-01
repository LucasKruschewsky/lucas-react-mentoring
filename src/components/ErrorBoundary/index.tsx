import * as React from 'react';
import { Component } from 'react';
import { IProps, IState } from './types';
import { ErrorInnerContainer, ErrorOuterContainer } from './styles';

export default class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(
    error: IState['error'],
    errorInfo: IState['errorInfo']
  ): void {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { hasError, error, errorInfo } = this.state;

    if (hasError) {
      return (
        <ErrorOuterContainer>
          <ErrorInnerContainer>
            <h1>Whoops, something went wrong...</h1>
            <p>{error && error.toString()}</p>
            <p> {errorInfo.componentStack}</p>
          </ErrorInnerContainer>
        </ErrorOuterContainer>
      );
    }

    return children;
  }
}
