import React = require('react');

export interface IAppModalProps {
  children?: React.ReactNode;
  closeModal: React.MouseEventHandler | (() => void);
}
