import * as React from 'react';
import { useEffect, useRef } from 'react';
import throttle from '@/functions/throttle';
import AppButton from 'Global/styled/AppButton';
import AppLogo from 'Components/AppLogo';
import AppModal from 'Components/AppModal';
import MovieForm from 'Components/MovieForm';
import { FaSearch } from 'react-icons/fa';
import { INavbarProps } from './types';
import NavContainer from './styles';
import { handleNavbarBackground } from './utils';

const Navbar: React.FunctionComponent<INavbarProps> = ({
  selectedMovie,
  setSelectedMovie,
}) => {
  const [isAddMovieOpen, setIsAddMovieOpen] = React.useState(false);
  const NavContainerRef = useRef<HTMLDivElement>();

  const openAddMovieForm = (): void => setIsAddMovieOpen(true);
  const closeAddMovieForm = (): void => setIsAddMovieOpen(false);
  const backToSearchBanner = (): void => setSelectedMovie(null);

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
      {selectedMovie ? (
        <AppButton onClick={backToSearchBanner} buttonStyle="defaultOutlined">
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
