import styled from 'styled-components';
import * as BannerImage from 'Images/HomepageHero.png';
import AppContainer from 'Global/styled/AppContainer';

export const SearchBannerContainer = styled.div`
  height: 396px;
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  & > div {
    padding: 6.5rem 8rem;
    display: flex;
    flex-direction: column;
  }
`;

export const SearchTitle = styled.h1`
  font-size: var(--title-1);
  color: rgb(var(--white));
  margin-bottom: 3rem;
`;

export const SearchInputAndButton = styled.div`
  display: flex;
  & > input {
    line-height: 100%;
    padding: 0 1rem;
    flex-grow: 4;
    margin-right: 1rem;
    font-size: var(--body-1);
    color: rgb(var(--white));

    border-color: transparent;
    border-radius: 4px;
    background-color: rgba(var(--secondary), 0.7);
    mix-blend-mode: normal;
  }

  & > button {
    flex-grow: 1;
  }
`;

export const SelectedMovieContainer = styled(AppContainer)`
  display: grid;
  padding-top: 4.5rem;
  grid-auto-flow: column;

  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export const MovieImageContainer = styled.div`
  grid-column: 2 / span 2;
  margin-bottom: 1rem;

  @media only screen and (min-width: 768px) {
    grid-column: 1 / span 5;
    margin-right: 2rem;
  }

  image,
  img,
  svg {
    max-width: 100%;
  }
`;

export const MovieDetailsContainer = styled.div`
  grid-column: span 7/ -1;
`;

export const MovieTitleAndRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  color: rgb(var(--white));
  h1 {
    font-size: var(--title-1);
    margin-right: 1rem;
  }

  div {
    border: 1px solid white;
    font-size: var(--body-1);
    border-radius: 50%;
    display: flex;

    min-width: 60px;
    min-height: 60px;

    justify-content: center;
    align-items: center;
  }
`;

export const MovieGenre = styled.div`
  margin: 0 0 1rem;
  font-size: 14px;
  color: rgba(var(--white), 0.5);
  display: flex;
  flex-wrap: wrap;

  p {
    margin-right: 1rem;
    margin-top: 0.5rem;
  }
`;

export const MovieYearAndDuration = styled.div`
  display: flex;
  color: rgb(var(--primary));
  font-size: 24px;
  margin: 0 0 1rem;

  & > p {
    margin-right: 3rem;
  }
`;

export const MovieDescription = styled.div`
  color: rgba(var(--white), 0.5);
`;
