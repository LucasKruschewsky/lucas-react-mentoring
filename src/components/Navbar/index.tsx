import * as React from 'react';
import { useEffect, useRef } from 'react';
import throttle from '@/functions/throttle';
import AppButton from 'Global/styled/AppButton';
import AppLogo from 'Components/AppLogo';
import { INavbarProps } from './types';
import NavContainer from './styles';
import { handleNavbarBackground } from './utils';

const Navbar: React.FunctionComponent<INavbarProps> = ({
  setIsAddMovieOpen,
}) => {
  const NavContainerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const NavContainerClasses: DOMTokenList =
      NavContainerRef?.current.classList;

    window.addEventListener(
      'scroll',
      throttle(() => handleNavbarBackground(NavContainerClasses), 150)
    );

    return window.removeEventListener(
      'scroll',
      throttle(() => handleNavbarBackground(NavContainerClasses), 150)
    );
  }, []);

  return (
    <NavContainer ref={NavContainerRef}>
      <AppLogo />
      <AppButton
        onClick={() => setIsAddMovieOpen(true)}
        buttonStyle="transparent"
        type="button"
      >
        + Add Movie
      </AppButton>
    </NavContainer>
  );
};

export default Navbar;
