import styled from 'styled-components';
import { IHandleClickOutBackground, IHandleClickOutStyle } from './types';

const BackgroundStyles: IHandleClickOutBackground = {
  transparent: `
  transparent;
  `,
  dark: `
  rgba(var(--secondary), 0.7);
  `,
};

export const ClickHandler = styled.div<IHandleClickOutStyle>`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${(props) => BackgroundStyles[props.backgroundColor]};

  ${(props) =>
    props.showClickHandler
      ? 'display: block; pointer-events: all;'
      : 'display: none; pointer-events: none;'}
`;
