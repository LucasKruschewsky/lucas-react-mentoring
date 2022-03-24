import styled from 'styled-components';

interface IProps {
  cols: number;
}

const numberOfCols = (cols: number): number => cols;

const GridAutoCols = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(
      ${(props: IProps) => numberOfCols(props.cols)},
      1fr
    );
  }
`;

export default GridAutoCols;
