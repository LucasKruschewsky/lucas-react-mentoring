import * as React from 'react';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Homepage from './pages/Homepage';

export default function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer />
    </>
  );
}
