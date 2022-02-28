import styled from 'styled-components';

interface IProps {
  show: boolean;
}

export const ClickHandler = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: transparent;

  ${(props: IProps) =>
    props.show
      ? 'display: block; pointer-events: all;'
      : 'display: none; pointer-events: none;'}
`;
