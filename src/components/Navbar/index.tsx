import * as React from 'react';
import { useEffect } from 'react';
import * as _ from 'lodash';
import AppButton from 'Styles/AppButton';
import AppLogo from 'Components/AppLogo';
import NavContainer from './styles';

export default function Navbar(): JSX.Element {
  const NavContainerRef = React.useRef<HTMLDivElement>();

  const handleNavbarBackground = () => {
    if (
      window.scrollY > 0 &&
      !NavContainerRef?.current.classList.contains('navbarBackground')
    ) {
      NavContainerRef?.current.classList.add('navbarBackground');
    }

    if (
      window.scrollY === 0 &&
      NavContainerRef?.current.classList.contains('navbarBackground')
    ) {
      NavContainerRef?.current.classList.remove('navbarBackground');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', _.throttle(handleNavbarBackground, 150));
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
