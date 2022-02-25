import * as React from 'react';
import AppLogo from 'Components/AppLogo';
import { FooterContainer } from './styles';

export default function Footer(): React.ReactElement {
  return (
    <FooterContainer>
      <AppLogo />
    </FooterContainer>
  );
}
