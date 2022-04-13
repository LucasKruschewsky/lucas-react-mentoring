import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppModal from 'Components/AppModal';
import MovieForm from 'Components/MovieForm';
import { RootState } from 'Root/store/types';
import { closeModal } from 'Root/store/modules/modal';
import { IModalHandlerProps } from './types';

const AppModalHandler: React.FunctionComponent<IModalHandlerProps> = () => {
  const dispatch = useDispatch();
  const { modalType, movieId } = useSelector(
    (state: RootState) => state.currentModal
  );
  const closeCurrentModal = React.useCallback(
    () => dispatch(closeModal()),
    [dispatch]
  );

  return (
    <AppModal showModal={Boolean(modalType)} closeModal={closeCurrentModal}>
      <MovieForm movieId={movieId} type={modalType} />
    </AppModal>
  );
};

export default AppModalHandler;
