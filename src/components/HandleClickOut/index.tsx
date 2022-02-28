import * as React from 'react';
import { IProps } from './types';
import { ClickHandler } from './styles';

const HandleClickOut: React.FunctionComponent<IProps> = ({
  children,
  showClickHandler,
  clickCallback,
}): React.ReactElement => (
  <>
    <ClickHandler onClick={clickCallback} show={showClickHandler} />
    {children}
  </>
);

export default HandleClickOut;
