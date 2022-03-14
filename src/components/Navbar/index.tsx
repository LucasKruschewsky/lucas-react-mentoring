import * as React from 'react';
import { useRef } from 'react';
import AppButton from 'Global/styled/AppButton';
import AppLogo from 'Components/AppLogo';
import { FaSearch } from 'react-icons/fa';
import {
  useCurrentMovie,
  useRemoveSelectedMovie,
} from '@/hooks/useSelectedMovie';
import { useAddModal } from '@/hooks/useModal';
import { useGlobalEventListener } from '@/hooks/useGlobalEventListener';
import { addCssClassOnScroll } from '@/functions/addCssClassOnScroll';
import { INavbarProps } from './types';
import NavContainer from './styles';

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const NavContainerRef = useRef<HTMLDivElement>(null);
  const currentMovie = useCurrentMovie();
  const removeSelectedMovie = useRemoveSelectedMovie();

  const openAddModal = useAddModal();
  const handleNavbarBackground = React.useCallback(
    () =>
      addCssClassOnScroll(
        NavContainerRef?.current?.classList,
        'navbarBackground',
        0
      ),
    [NavContainerRef]
  );

  useGlobalEventListener(window, 'scroll', handleNavbarBackground);

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
