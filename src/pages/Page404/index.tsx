import AppButton from 'Global/styled/AppButton';
import AppContainer from 'Global/styled/AppContainer';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Container404 } from './styles';

const Page404: React.FunctionComponent<{}> = () => (
  <AppContainer>
    <Container404>
      <div>
        <h1>404</h1>
        <p className="subtitle">Sorry, page could not be found.</p>
        <p>Either something went wrong, or the page does not exist anymore.</p>
        <Link className="button-link" to="/">
          <AppButton>Back to Homepage</AppButton>
        </Link>
      </div>
    </Container404>
  </AppContainer>
);

export default Page404;
