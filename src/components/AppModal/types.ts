import React = require('react');

export interface IProps {
  children?: React.ReactNode;
  title?: string;
  closeModal: React.MouseEventHandler | (() => void);
}
