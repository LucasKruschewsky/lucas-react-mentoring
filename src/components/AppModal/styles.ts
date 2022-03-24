import styled from 'styled-components';

export const ModalBackground = styled.div`
  pointer-events: none;

  position: fixed;
  z-index: 100;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  display: flex;
  margin: auto;

  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  pointer-events: all;

  position: relative;
  background-color: rgb(var(--secondary-dark));
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  max-width: 60vh;

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

export const ModalContent = styled.div``;
