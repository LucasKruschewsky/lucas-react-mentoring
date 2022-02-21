import styled from 'styled-components';
import BannerImage from '../../Images/HomepageHero.png';

const BannerContainer = styled.div`
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

const SearchTitle = styled.h1`
  font-size: var(--title-1);
  color: rgb(var(--white));
  margin-bottom: 3rem;
`;

const SearchInputAndButton = styled.div`
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

export { BannerContainer, SearchTitle, SearchInputAndButton };
