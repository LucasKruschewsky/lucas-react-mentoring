import React = require('react');

export interface IAppModalProps {
  children?: React.ReactNode;
  title?: string;
  closeModal: React.MouseEventHandler | (() => void);
}
