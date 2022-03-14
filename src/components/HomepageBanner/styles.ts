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
  padding-top: 5rem;
  display: flex;

  & > div {
    flex-grow: 1;
    margin-left: 1.5rem;
  }
`;

export const MovieTitleAndRating = styled.div`
  display: flex;
  align-items: center;
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

    width: 60px;
    height: 60px;

    justify-content: center;
    align-items: center;
  }
`;

export const MovieGenre = styled.div`
  margin: 0 0 1rem;
  font-size: 14px;
  color: rgba(var(--white), 0.5);
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
