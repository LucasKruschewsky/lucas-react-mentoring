import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  display: flex;
  margin: auto;

  justify-content: center;
  align-items: center;

  background-color: rgba(var(--secondary), 0.75);
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: rgb(var(--secondary-dark));
  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  color: rgb(var(--white));

  & > svg {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    transform: scale(1.5);
    transform-origin: top right;

    cursor: pointer;
  }
`;

export const ModalTitle = styled.h1`
  font-size: var(--title-1);
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

export const ModalContent = styled.div``;
