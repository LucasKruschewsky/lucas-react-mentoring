import { MouseEventHandler } from 'react';

export interface IHandleClickOutBackground {
  transparent: string;
  dark: string;
}

export interface IHandleClickOutStyle {
  showClickHandler: boolean;
  backgroundColor: 'transparent' | 'dark';
  clickCallback: MouseEventHandler | (() => void);
}

export interface IHandleClickOutProps extends IHandleClickOutStyle {
  children: React.ReactElement;
}
