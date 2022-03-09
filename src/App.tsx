import * as React from 'react';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Homepage from '@/pages/Homepage';
import { AppContextProvider } from '@/context/provider';
import AppModalHandler from '@/pages/ModalHandler';

const App: React.FunctionComponent = () => (
  <AppContextProvider>
    <Navbar />
    <Homepage />
    <Footer />
    <AppModalHandler />
  </AppContextProvider>
);

export default App;
