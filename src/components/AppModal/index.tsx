import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BsX } from 'react-icons/bs';
import HandleClickOut from 'Components/HandleClickOut';
import { IAppModalProps } from './types';
import { ModalBackground, ModalContainer, ModalContent } from './styles';

const AppModal: React.FunctionComponent<IAppModalProps> = ({
  children,
  showModal,
  closeModal,
  targetRenderedDiv,
}) =>
  ReactDOM.createPortal(
    <div>
      {showModal ? (
        <HandleClickOut
          backgroundColor="dark"
          showClickHandler
          clickCallback={closeModal}
        >
          <ModalBackground>
            <ModalContainer>
              <ModalContent>{children}</ModalContent>
              <BsX onClick={closeModal} />
            </ModalContainer>
          </ModalBackground>
        </HandleClickOut>
      ) : null}
    </div>,
    targetRenderedDiv
  );

export default AppModal;
