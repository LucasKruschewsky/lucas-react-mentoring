import styled from 'styled-components';

export const FiltersSection = styled.div`
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

export const GenreFilters = styled.div`
  display: flex;

  button {
    text-transform: uppercase;
    font-size: 16px;
  }
`;

export const SortSection = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 16px;

  p {
    height: fit-content;
    margin: auto;
    opacity: 0.6;
    user-select: none;
    margin-right: 1.5rem;
  }

  select {
    text-transform: uppercase;
    font-size: 16px;
  }

  button {
    font-size: 16px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  img,
  svg {
    margin-left: 0.5rem;
    cursor: pointer;

    &#asc-desc-sort-icon {
      transform: scale(1.5);
      transform-origin: left;
    }
  }
`;
