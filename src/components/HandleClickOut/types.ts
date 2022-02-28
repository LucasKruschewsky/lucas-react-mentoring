import { MouseEventHandler } from 'react';

export interface IProps {
  children: React.ReactElement;
  showClickHandler: boolean;
  clickCallback: MouseEventHandler;
}
