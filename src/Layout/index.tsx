import Footer from 'Components/Footer';
import AppModalHandler from 'Components/ModalHandler';
import Navbar from 'Components/Navbar';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import { ILayoutProps } from './types';
import 'react-toastify/dist/ReactToastify.css';

const AppLayout: React.FunctionComponent<ILayoutProps> = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
    <AppModalHandler />
    <ToastContainer theme="colored" />
  </>
);

export default AppLayout;
