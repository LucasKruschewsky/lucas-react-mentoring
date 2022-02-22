import React from 'react';
import AppButton from 'Styles/AppButton';
import AppLogo from '../AppLogo';
import NavContainer from './styles';

export default function Navbar() {
  return (
    <NavContainer>
      <AppLogo />
      <AppButton buttonStyle="transparent" type="button">
        + Add Movie
      </AppButton>
    </NavContainer>
  );
}
