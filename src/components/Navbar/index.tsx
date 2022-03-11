import * as React from 'react';
import { useRef } from 'react';
import AppButton from 'Global/styled/AppButton';
import AppLogo from 'Components/AppLogo';
import { FaSearch } from 'react-icons/fa';
import { useAddModal } from '@/hooks/useModal';
import { useGlobalEventListener } from '@/hooks/useGlobalEventListener';
import { addCssClassOnScroll } from '@/functions/addCssClassOnScroll';
import { connect } from 'react-redux';
import { removeSelectMovie } from '@/store/modules/movie/actions';
import { IStoreState, TStoreDispatch } from '@/store/types';
import { IMoviesListData } from '@/data/MockedDataTypes';
import { INavbarProps, INavbarStoreProps } from './types';
import NavContainer from './styles';

const Navbar: React.FunctionComponent<INavbarProps> = ({
  removeSelectedMovie,
  currentMovie,
}) => {
  const NavContainerRef = useRef<HTMLDivElement>(null);
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

const mapStateToProps = (
  state: IStoreState
): { currentMovie: IMoviesListData } => ({
  currentMovie: state.selectedMovie,
});

const mapDispatchToProps = (dispatch: TStoreDispatch): INavbarStoreProps => ({
  removeSelectedMovie: () => dispatch(removeSelectMovie()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
