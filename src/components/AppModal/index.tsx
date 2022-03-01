import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Input from 'Styles/Input';
import { BsX } from 'react-icons/bs';
import { IProps } from './types';
import {
  ModalBackground,
  ModalContainer,
  ModalTitle,
  ModalContent,
  FormTest,
} from './styles';

const AppModal: React.FunctionComponent<IProps> = ({ children, title }) =>
  ReactDOM.createPortal(
    <ModalBackground>
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        <FormTest action="">
          <Input type="text" placeholder="Testing" />
          <Input type="text" />
        </FormTest>
        <ModalContent>{children}</ModalContent>
        <BsX />
      </ModalContainer>
    </ModalBackground>,
    document.getElementById('app-modal')
  );

export default AppModal;
