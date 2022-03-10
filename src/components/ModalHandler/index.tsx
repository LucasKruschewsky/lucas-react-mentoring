import * as React from 'react';
import AppModal from 'Components/AppModal';
import MovieForm from 'Components/MovieForm';
import { useCloseModal, useCurrentModal } from '@/hooks/useModal';

const AppModalHandler: React.FunctionComponent = () => {
  const closeModal = useCloseModal();
  const currentModal = useCurrentModal();

  return (
    <AppModal showModal={Boolean(currentModal)} closeModal={closeModal}>
      <MovieForm type={currentModal} />
    </AppModal>
  );
};

export default AppModalHandler;
