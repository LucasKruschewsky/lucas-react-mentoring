import styled from 'styled-components';
import { IHandleClickOutBackground, IHandleClickOutStyleProps } from './types';

const BackgroundStyles: IHandleClickOutBackground = {
  transparent: `
  transparent;
  `,
  dark: `
  rgba(var(--secondary), 0.7);
  `,
};

export const ClickHandler = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${({ backgroundColor }) =>
    BackgroundStyles[backgroundColor]};

  ${(props: IHandleClickOutStyleProps) =>
    props.show
      ? 'display: block; pointer-events: all;'
      : 'display: none; pointer-events: none;'}
`;
