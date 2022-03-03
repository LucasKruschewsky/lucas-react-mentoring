import styled from 'styled-components';
import AppContainer from 'Global/styled/AppContainer';

const NavContainer = styled(AppContainer)`
  padding-bottom: 1rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: background 0.5s ease-in-out;

  position: fixed;
  left: 0;
  right: 0;

  &.navbarBackground {
    background-color: rgb(var(--secondary-light));
  }
`;

export default NavContainer;
