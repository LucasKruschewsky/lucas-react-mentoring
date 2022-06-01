import Footer from 'Components/Footer';
import AppModalHandler from 'Components/ModalHandler';
import Navbar from 'Components/Navbar';
import * as React from 'react';
import { ILayoutProps } from './types';

const AppLayout: React.FunctionComponent<ILayoutProps> = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
    <AppModalHandler />
  </>
);

export default AppLayout;
