import { MouseEventHandler } from 'react';

export interface IHandleClickOutProps {
  children: React.ReactElement;
  showClickHandler: boolean;
  clickCallback: MouseEventHandler;
}

export interface IHandleClickOutStyleProps {
  show: boolean;
  backgroundColor: 'transparent' | 'dark';
}

export interface IHandleClickOutBackground {
  transparent: string;
  dark: string;
}
