import * as React from 'react';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Homepage from '@/pages/Homepage';
import { SelectedMovieProvider } from './hooks/useSelectedMovie';

const App: React.FunctionComponent = () => (
  <SelectedMovieProvider>
    <Navbar />
    <Homepage />
    <Footer />
  </SelectedMovieProvider>
);

export default App;
