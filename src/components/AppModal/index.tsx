import * as React from 'react';
import { IAppModalProps } from './types';
import { ModalPortal } from './helper';

const AppModal: React.FunctionComponent<IAppModalProps> = ({
  children,
  showModal,
  closeModal,
  targetRenderedDiv,
}) => {
  const [isClientRendered, setIsClientRendered] = React.useState(false);

  React.useEffect(() => {
    setIsClientRendered(true);
  }, []);

  return isClientRendered ? (
    <ModalPortal
      showModal={showModal}
      closeModal={closeModal}
      targetRenderedDiv={targetRenderedDiv}
    >
      {children}
    </ModalPortal>
  ) : null;
};

export default AppModal;
