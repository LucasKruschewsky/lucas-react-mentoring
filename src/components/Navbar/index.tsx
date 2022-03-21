import * as React from 'react';
import { useRef } from 'react';
import AppButton from 'Global/styled/AppButton';
import AppLogo from 'Components/AppLogo';
import { FaSearch } from 'react-icons/fa';
import { useGlobalEventListener } from '@/hooks/useGlobalEventListener';
import { addCssClassOnScroll } from '@/functions/addCssClassOnScroll';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedMovie } from '@/store/modules/selectedMovie';
import { RootState } from '@/store/types';
import { openModal } from '@/store/modules/modal';
import { INavbarProps } from './types';
import NavContainer from './styles';

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const dispatch = useDispatch();
  const currentMovie = useSelector((state: RootState) => state.selectedMovie);
  const NavContainerRef = useRef<HTMLDivElement>(null);
  const handleNavbarBackground = React.useCallback(
    () =>
      addCssClassOnScroll(
        NavContainerRef?.current?.classList,
        'navbarBackground',
        0
      ),
    [NavContainerRef]
  );
  const unselectMovie: () => void = React.useCallback(
    () => dispatch(removeSelectedMovie()),
    [dispatch]
  );
  const openAddModal: () => void = React.useCallback(
    () => dispatch(openModal({ modalType: 'add' })),
    [dispatch]
  );

  useGlobalEventListener(window, 'scroll', handleNavbarBackground);

  return (
    <NavContainer ref={NavContainerRef}>
      <AppLogo />
      {currentMovie ? (
        <AppButton onClick={unselectMovie} buttonStyle="defaultOutlined">
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
