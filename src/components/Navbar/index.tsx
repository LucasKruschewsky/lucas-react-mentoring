import * as React from 'react';
import { useEffect, useRef } from 'react';
import throttle from '@/functions/throttle';
import AppButton from 'Global/styled/AppButton';
import AppLogo from 'Components/AppLogo';
import AppModal from 'Components/AppModal';
import MovieForm from 'Components/MovieForm';
import { FaSearch } from 'react-icons/fa';
import {
  useCurrentMovie,
  useRemoveSelectedMovie,
} from '@/hooks/useSelectedMovie';
import { INavbarProps } from './types';
import NavContainer from './styles';
import { handleNavbarBackground } from './utils';

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const [isAddMovieOpen, setIsAddMovieOpen] = React.useState(false);
  const NavContainerRef = useRef<HTMLDivElement>();
  const currentMovie = useCurrentMovie();
  const removeSelectedMovie = useRemoveSelectedMovie();

  const openAddMovieForm = React.useCallback(() => setIsAddMovieOpen(true), []);
  const closeAddMovieForm = React.useCallback(
    () => setIsAddMovieOpen(false),
    []
  );

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
          onClick={openAddMovieForm}
          buttonStyle="transparent"
          type="button"
        >
          + Add Movie
        </AppButton>
      )}

      <AppModal showModal={isAddMovieOpen} closeModal={closeAddMovieForm}>
        <MovieForm type="add" />
      </AppModal>
    </NavContainer>
  );
};

export default Navbar;
