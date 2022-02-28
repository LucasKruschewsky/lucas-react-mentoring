import styled from 'styled-components';
import { IStyleProps } from './types';

const MovieCardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > img {
    margin-bottom: 1.5rem;
  }

  & > svg {
    color: white;
    background-color: rgb(var(--secondary-dark));
    position: absolute;
    top: 2%;
    right: 4%;
    border-radius: 50%;
    padding: 0.3rem;
    cursor: pointer;
    opacity: 0;

    transition: all 0.1s ease-in-out;

    ${(props: IStyleProps) =>
      props.showOptionsIcon
        ? 'visibility: visible; opacity: 1;'
        : 'visibility: hidden'}
  }
`;

const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(var(--white));

  div {
    opacity: 0.7;
    h1 {
      margin-bottom: 1rem;
      font-size: var(--body-1);
    }

    p {
      font-size: 14px;
    }
  }

  & > p {
    border: 1px solid rgb(var(--white));
    padding: 0.5rem 1.2rem;
    border-radius: 4px;
    opacity: 0.7;
  }
`;

const MovieOptionsMenu = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 100;

  width: 50%;
  color: rgb(var(--white));
  top: 2%;
  right: 4%;
  background-color: rgb(var(--secondary-dark));
  font-size: 16px;

  transition: all 0.1s ease-in-out;

  ${(props: IStyleProps) =>
    props.showOptionsContainer
      ? 'opacity: 1; pointer-events: all;'
      : 'opacity: 0; pointer-events: none;'}

  svg {
    place-self: end;
    cursor: pointer;
  }

  div {
    padding: 0.5rem 1rem;
    transition: all 0.1s ease-in-out;
    margin: 0.3rem 0;
    user-select: none;
    cursor: pointer;

    &:hover {
      background-color: rgb(var(--primary));
    }
  }
`;

export { MovieCardContainer, MovieInfo, MovieOptionsMenu };
