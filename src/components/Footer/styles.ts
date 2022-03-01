import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;

  margin-top: 5rem;
  padding: 1rem;

  background-color: rgb(var(--secondary-light));

  & > * {
    width: 100%;
  }
`;

export { FooterContainer };
