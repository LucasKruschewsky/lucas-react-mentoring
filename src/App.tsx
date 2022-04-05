import * as React from 'react';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Homepage from '@/pages/Homepage';
import AppModalHandler from 'Components/ModalHandler';
import { Provider } from 'react-redux';
import store from '@/store';

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <Navbar />
    <Homepage />
    <Footer />
    <AppModalHandler />
  </Provider>
);

export default App;
