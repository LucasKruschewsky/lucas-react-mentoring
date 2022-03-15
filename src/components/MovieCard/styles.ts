import styled from 'styled-components';
import { IMovieCardContainer, IMovieCardOptionsMenuProps } from './types';

const MovieCardContainer = styled.div<IMovieCardContainer>`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  button {
    display: flex;
    img {
      margin-bottom: 1.5rem;
      cursor: pointer;
      max-width: 100%;
      height: max-content;
      flex-grow: 1;
    }
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

    ${({ showOptionsIcon }) =>
      showOptionsIcon
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

const MovieOptionsMenu = styled.div<IMovieCardOptionsMenuProps>`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 100;

  width: 50%;
  top: 2%;
  right: 4%;
  background-color: rgb(var(--secondary-dark));
  font-size: 16px;

  transition: all 0.1s ease-in-out;

  ${({ showOptionsContainer }) =>
    showOptionsContainer
      ? 'opacity: 1; pointer-events: all;'
      : 'opacity: 0; pointer-events: none;'}

  svg {
    color: rgb(var(--white));
    place-self: end;
    cursor: pointer;
    transform: scale(1.5);
    transform-origin: top right;
  }

  button {
    color: rgb(var(--white));
    text-align: left;
    font-size: 16px;
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
