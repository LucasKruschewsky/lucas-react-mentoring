import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BsX } from 'react-icons/bs';
import { IProps } from './types';
import {
  ModalBackground,
  ModalContainer,
  ModalTitle,
  ModalContent,
} from './styles';

const AppModal: React.FunctionComponent<IProps> = ({ children, title }) =>
  ReactDOM.createPortal(
    <ModalBackground>
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{children}</ModalContent>
        <BsX />
      </ModalContainer>
    </ModalBackground>,
    document.getElementById('app-modal')
  );

export default AppModal;
