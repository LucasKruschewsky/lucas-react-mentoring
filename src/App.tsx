import * as React from 'react';
import Navbar from 'Components/Navbar';
import Homepage from './pages/Homepage';
import Footer from 'Components/Footer';

export default function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}
