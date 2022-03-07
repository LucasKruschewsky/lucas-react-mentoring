import * as React from 'react';
import Navbar from 'Components/Navbar';
import Footer from 'Components/Footer';
import Homepage from '@/pages/Homepage';

const App: React.FunctionComponent = () => {
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  return (
    <>
      <Navbar
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />
      <Homepage
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
      />
      <Footer />
    </>
  );
};

export default App;
