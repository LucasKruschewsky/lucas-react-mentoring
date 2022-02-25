import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as _ from 'lodash';
import AppButton from 'Styles/AppButton';
import AppLogo from 'Components/AppLogo';
import NavContainer from './styles';

export default function Navbar(): React.ReactElement {
  const NavContainerRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const NavContainerClasses: DOMTokenList =
      NavContainerRef?.current.classList;

    const handleNavbarBackground = (): void => {
      if (
        window.scrollY > 0 &&
        NavContainerClasses.contains('navbarBackground') === false
      ) {
        NavContainerClasses.add('navbarBackground');
      }

      if (
        window.scrollY === 0 &&
        NavContainerClasses.contains('navbarBackground')
      ) {
        NavContainerClasses.remove('navbarBackground');
      }
    };

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
