import styled from 'styled-components';

interface Props {
  cols: number;
}

const numberOfCols = (cols: number) => cols;

const GridAutoCols = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props: Props) => numberOfCols(props.cols)},
    1fr
  );
`;

export default GridAutoCols;
