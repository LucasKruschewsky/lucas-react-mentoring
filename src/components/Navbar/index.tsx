import * as React from 'react';
import { useRef } from 'react';
import AppButton from 'Global/styled/AppButton';
import AppLogo from 'Components/AppLogo';
import { FaSearch } from 'react-icons/fa';
import { useGlobalEventListener } from '@/hooks/useGlobalEventListener';
import { addCssClassOnScroll } from '@/functions/addCssClassOnScroll';
import { useDispatch } from 'react-redux';
import { openModal } from '@/store/modules/modal';
import { ADD } from '@/store/modules/modal/constants';
import { useSearchParams } from 'react-router-dom';
import { retrieveAllSearchParams } from '@/functions/retrieveSearchParams';
import { INavbarProps } from './types';
import NavContainer from './styles';

const Navbar: React.FunctionComponent<INavbarProps> = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
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
    () =>
      setSearchParams({ ...retrieveAllSearchParams(searchParams), movie: [] }),
    [setSearchParams, searchParams]
  );
  const openAddModal: () => void = React.useCallback(
    () => dispatch(openModal({ modalType: ADD })),
    [dispatch]
  );

  useGlobalEventListener(window, 'scroll', handleNavbarBackground);

  return (
    <NavContainer ref={NavContainerRef}>
      <AppLogo />
      {searchParams.has('movie') ? (
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
