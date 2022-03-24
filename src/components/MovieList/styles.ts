import styled from 'styled-components';
import GridAutoCols from 'Global/styled/GridAutoCols';

const MoviesFound = styled.div`
  padding: 1.5rem 0;
  color: rgb(var(--white));
`;

const MoviesGrid = styled(GridAutoCols)`
  grid-gap: 3rem;
`;

export { MoviesFound, MoviesGrid };
