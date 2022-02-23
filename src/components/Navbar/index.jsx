import React, { createRef, useEffect } from 'react';
import _ from 'lodash';
import AppButton from 'Styles/AppButton';
import AppLogo from '../AppLogo';
import NavContainer from './styles';

export default function Navbar() {
  const NavContainerRef = createRef();
  let NavContainerClassList;

  const handleNavbarBackground = () => {
    if (
      window.scrollY > 0 &&
      !NavContainerClassList.contains('navbarBackground')
    ) {
      NavContainerClassList.add('navbarBackground');
    }

    if (
      window.scrollY === 0 &&
      NavContainerClassList.contains('navbarBackground')
    ) {
      NavContainerClassList.remove('navbarBackground');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', _.throttle(handleNavbarBackground, 150));
    NavContainerClassList = NavContainerRef?.current.classList;
  }, []);

  return (
    <NavContainer ref={NavContainerRef}>
      <AppLogo />
      <AppButton buttonStyle="transparent" type="button">
        + Add Movie
      </AppButton>
    </NavContainer>
  );
}
