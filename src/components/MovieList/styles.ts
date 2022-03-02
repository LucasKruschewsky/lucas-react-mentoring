import styled from 'styled-components';
import GridAutoCols from 'Global/styled/GridAutoCols';

const FiltersSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(var(--white));
  border-bottom: 1px solid rgb(var(--secondary-light));

  button {
    padding: 1.5rem 1rem;
    background-color: transparent;
    border: none;
    color: rgb(var(--white));
    box-sizing: border-box;
    cursor: pointer;

    &.is-selected {
      border-bottom: 3px solid rgb(var(--primary));
      margin-bottom: -2px;
    }
  }
`;

const GenreFilters = styled.div`
  display: flex;

  button {
    text-transform: uppercase;
    font-size: 16px;
  }
`;

const SortSection = styled.div`
  display: flex;
  text-transform: uppercase;
  font-size: 16px;

  p {
    margin-right: 2rem;
    opacity: 0.6;
    user-select: none;
  }

  div {
    display: flex;
    align-items: center;
    cursor: pointer;

    img,
    svg {
      margin-left: 1rem;
    }
  }
`;

const MoviesFound = styled.div`
  padding: 1.5rem 0;
  color: rgb(var(--white));
`;

const MoviesGrid = styled(GridAutoCols)`
  grid-gap: 3rem;
`;

export { FiltersSection, GenreFilters, SortSection, MoviesFound, MoviesGrid };
