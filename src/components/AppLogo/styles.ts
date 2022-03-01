import styled from 'styled-components';

const Logo = styled.p`
  color: rgb(var(--primary));
  font-size: var(--body-1);
  user-select: none;
  cursor: pointer;

  & > b {
    font-weight: bold;
  }
`;

export { Logo };
