import styled from 'styled-components';

const MovieCardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > img {
    margin-bottom: 1.5rem;
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

export { MovieCardContainer, MovieInfo };
