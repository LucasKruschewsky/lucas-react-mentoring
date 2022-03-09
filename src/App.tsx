import * as React from 'react';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Homepage from '@/pages/Homepage';
import { AppContextProvider } from './context/provider';

const App: React.FunctionComponent = () => (
  <AppContextProvider>
    <Navbar />
    <Homepage />
    <Footer />
  </AppContextProvider>
);

export default App;
