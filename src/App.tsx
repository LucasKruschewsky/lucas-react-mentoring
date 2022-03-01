import * as React from 'react';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Homepage from '@/pages/Homepage';

const App: React.FunctionComponent = () => (
  <>
    <Navbar />
    <Homepage />
    <Footer />
  </>
);

export default App;
