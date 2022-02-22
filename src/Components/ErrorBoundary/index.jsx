import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ErrorInnerContainer, ErroOuterContainer } from './styles';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
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

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
