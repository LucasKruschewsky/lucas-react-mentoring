import React from 'react';
import AppButton from 'Styles/AppButton';
import { Logo, NavContainer } from './styles';

export default function Navbar() {
  return (
    <NavContainer>
      <Logo>
        <b>netflix</b>roulette
      </Logo>
      <AppButton buttonStyle="transparent" type="button">
        + Add Movie
      </AppButton>
    </NavContainer>
  );
}
