import * as React from 'react';
import { useEffect, useRef } from 'react';
import throttle from '@/functions/throttle';
import AppButton from 'Global/styled/AppButton';
import AppLogo from 'Components/AppLogo';

import { FaSearch } from 'react-icons/fa';
import {
  useCurrentMovie,
  useRemoveSelectedMovie,
} from '@/hooks/useSelectedMovie';
import { useAddModal } from '@/hooks/useModal';
import { INavbarProps } from './types';
import NavContainer from './styles';
import { handleNavbarBackground } from './utils';

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const NavContainerRef = useRef<HTMLDivElement>();
  const currentMovie = useCurrentMovie();
  const removeSelectedMovie = useRemoveSelectedMovie();

  const openAddModal = useAddModal();

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
      {currentMovie ? (
        <AppButton onClick={removeSelectedMovie} buttonStyle="defaultOutlined">
          <FaSearch />
          Search
        </AppButton>
      ) : (
        <AppButton
          onClick={openAddModal}
          buttonStyle="transparent"
          type="button"
        >
          + Add Movie
        </AppButton>
      )}
    </NavContainer>
  );
};

export default Navbar;
