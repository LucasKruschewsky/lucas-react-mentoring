import styled from 'styled-components';

interface IProps {
  showOptions: boolean;
}

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

    ${(props: IProps) =>
      props.showOptions
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

export { MovieCardContainer, MovieInfo };
