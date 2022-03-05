import * as React from 'react';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Homepage from '@/pages/Homepage';
import AppModal from 'Components/AppModal';
import MovieForm from 'Components/MovieForm';

const App: React.FunctionComponent = () => {
  const [isEditMovieOpen, setIsEditMovieOpen] = React.useState(false);
  const [isDeleteMovieOpen, setIsDeleteMovieOpen] = React.useState(false);

  const isModalOpen = React.useMemo(
    () => isEditMovieOpen || isDeleteMovieOpen,
    [isEditMovieOpen, isDeleteMovieOpen]
  );

  const closeModal = React.useCallback(() => {
    setIsEditMovieOpen(false);
    setIsDeleteMovieOpen(false);
  }, []);

  return (
    <>
      <Navbar />
      <Homepage
        setIsDeleteMovieOpen={setIsDeleteMovieOpen}
        setIsEditMovieOpen={setIsEditMovieOpen}
      />
      <Footer />
      {isModalOpen && (
        <AppModal closeModal={closeModal}>
          {isEditMovieOpen && <MovieForm type="edit" />}
          {isDeleteMovieOpen && <MovieForm type="delete" />}
        </AppModal>
      )}
    </>
  );
};

export default App;
