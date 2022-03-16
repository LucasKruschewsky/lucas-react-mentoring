import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppModal from 'Components/AppModal';
import MovieForm from 'Components/MovieForm';
import { RootState } from '@/store/types';
import { closeModal } from '@/store/modules/modal';
import { IModalHandlerProps } from './types';

const AppModalHandler: React.FunctionComponent<IModalHandlerProps> = () => {
  const dispatch = useDispatch();
  const currentModal = useSelector((state: RootState) => state.currentModal);
  const closeCurrentModal = React.useCallback(
    () => dispatch(closeModal()),
    [dispatch]
  );

  return (
    <AppModal showModal={Boolean(currentModal)} closeModal={closeCurrentModal}>
      <MovieForm type={currentModal} />
    </AppModal>
  );
};

export default AppModalHandler;
