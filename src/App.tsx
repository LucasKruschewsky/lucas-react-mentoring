import * as React from 'react';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Homepage from '@/pages/Homepage';
import AppModal from 'Components/AppModal';
import AddMovieForm from 'Components/AddMovieForm';

const App: React.FunctionComponent = () => {
  const [isAddMovieOpen, setIsAddMovieOpen] = React.useState(false);

  return (
    <>
      <Navbar setIsAddMovieOpen={setIsAddMovieOpen} />
      <Homepage />
      {isAddMovieOpen && (
        <AppModal closeModal={() => setIsAddMovieOpen(false)}>
          <AddMovieForm />
        </AppModal>
      )}
      <Footer />
    </>
  );
};

export default App;
