import styled from 'styled-components';
import AppContainer from 'Styles/AppContainer';

const ErrorInnerContainer = styled(AppContainer)`
  background-color: rgb(var(--white));
  border-radius: 8px;
  padding: 2rem;

  h1 {
    font-size: var(--title-1);
    margin-bottom: 1rem;
  }

  p {
    font-size: var(--body-1);
    margin-bottom: 0.5rem;
  }
`;

const ErroOuterContainer = styled(AppContainer)`
  margin-top: 3rem;
`;

export { ErrorInnerContainer, ErroOuterContainer };
