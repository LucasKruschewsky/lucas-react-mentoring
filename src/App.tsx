import * as React from 'react';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Homepage from '@/pages/Homepage';
import AppModal from 'Components/AppModal';
import MovieForm from 'Components/MovieForm';

const App: React.FunctionComponent = () => {
  const [isAddMovieOpen, setIsAddMovieOpen] = React.useState(false);
  const [isEditMovieOpen, setIsEditMovieOpen] = React.useState(false);
  const [isDeleteMovieOpen, setIsDeleteMovieOpen] = React.useState(false);

  const isModalOpen = isAddMovieOpen || isEditMovieOpen || isDeleteMovieOpen;

  const closeModal = (): void => {
    setIsAddMovieOpen(false);
    setIsEditMovieOpen(false);
    setIsDeleteMovieOpen(false);
  };

  return (
    <>
      <Navbar setIsAddMovieOpen={setIsAddMovieOpen} />
      <Homepage
        setIsDeleteMovieOpen={setIsDeleteMovieOpen}
        setIsEditMovieOpen={setIsEditMovieOpen}
      />
      <Footer />
      {isModalOpen && (
        <AppModal closeModal={closeModal}>
          {isAddMovieOpen && <MovieForm type="add" />}
          {isEditMovieOpen && <MovieForm type="edit" />}
          {isDeleteMovieOpen && <MovieForm type="delete" />}
        </AppModal>
      )}
    </>
  );
};

export default App;
