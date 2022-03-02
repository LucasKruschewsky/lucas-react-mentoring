import styled from 'styled-components';

interface IProps {
  cols: number;
}

const numberOfCols = (cols: number): number => cols;

const GridAutoCols = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props: IProps) => numberOfCols(props.cols)},
    1fr
  );
`;

export default GridAutoCols;
