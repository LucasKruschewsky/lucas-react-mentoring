import styled from 'styled-components';
import AppContainer from 'Styles/AppContainer';

const NavContainer = styled(AppContainer)`
  padding-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  left: 0;
  right: 0;
`;

export default NavContainer;
