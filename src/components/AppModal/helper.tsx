import HandleClickOut from 'Components/HandleClickOut';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BsX } from 'react-icons/bs';
import { ModalBackground, ModalContainer, ModalContent } from './styles';
import { IAppModalProps } from './types';

export const ModalPortal: React.FunctionComponent<IAppModalProps> = ({
  closeModal,
  showModal,
  children,
  targetRenderedDiv = document.querySelector('app-modal'),
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
