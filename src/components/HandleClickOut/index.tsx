import * as React from 'react';
import { IHandleClickOutProps } from './types';
import { ClickHandler } from './styles';

const HandleClickOut: React.FunctionComponent<IHandleClickOutProps> = ({
  children,
  showClickHandler,
  clickCallback,
}): React.ReactElement => (
  <>
    <ClickHandler
      backgroundColor="dark"
      onClick={clickCallback}
      show={showClickHandler}
    />
    {children}
  </>
);

export default HandleClickOut;
