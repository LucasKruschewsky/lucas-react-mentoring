import * as React from 'react';
import { IHandleClickOutProps } from './types';
import { ClickHandler } from './styles';

const HandleClickOut: React.FunctionComponent<IHandleClickOutProps> = ({
  children,
  showClickHandler,
  backgroundColor,
  clickCallback,
}): React.ReactElement => (
  <>
    <ClickHandler
      showClickHandler={showClickHandler}
      backgroundColor={backgroundColor}
      clickCallback={clickCallback}
    />
    {children}
  </>
);

export default HandleClickOut;
