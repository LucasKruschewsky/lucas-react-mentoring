import * as React from 'react';
import AppLogo from 'Components/AppLogo';
import { FooterContainer } from './styles';

const Footer: React.FunctionComponent = () => (
  <FooterContainer dataid-test="FooterContainer">
    <AppLogo />
  </FooterContainer>
);

export default Footer;
