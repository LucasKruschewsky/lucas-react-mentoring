import styled from 'styled-components';

const numberOfCols = (cols) => cols;

const GridAutoCols = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => numberOfCols(props.cols)}, 1fr);
`;

export default GridAutoCols;
