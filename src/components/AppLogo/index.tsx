import * as React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './styles';

const AppLogo: React.FunctionComponent = () => (
  <Logo>
    <Link to="/">
      <b>netflix</b>roulette
    </Link>
  </Logo>
);

export default AppLogo;
