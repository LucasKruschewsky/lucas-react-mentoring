import React = require('react');

export interface IAppModalProps {
  children?: React.ReactNode;
  showModal: boolean;
  closeModal: React.MouseEventHandler | (() => void);
  targetRenderedDiv?: HTMLDivElement;
}
