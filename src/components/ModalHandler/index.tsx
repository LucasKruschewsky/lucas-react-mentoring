import * as React from 'react';
import { connect } from 'react-redux';
import AppModal from 'Components/AppModal';
import MovieForm from 'Components/MovieForm';
import { IModalAction, TModalState } from '@/store/modules/modal/types';
import { IStoreState, TStoreDispatch } from '@/store/types';
import { closeModal } from '@/store/modules/modal/actions';
import { IModalHandlerStoreProps } from './types';

const AppModalHandler: React.FunctionComponent<IModalHandlerStoreProps> = ({
  closeCurrentModal,
  currentModal,
}) => (
  <AppModal showModal={Boolean(currentModal)} closeModal={closeCurrentModal}>
    <MovieForm type={currentModal} />
  </AppModal>
);

const mapStateToProps = (
  state: IStoreState
): { currentModal: TModalState } => ({
  currentModal: state.currentModal,
});

const mapDispatchToProps = (
  dispatch: TStoreDispatch
): { closeCurrentModal: () => IModalAction } => ({
  closeCurrentModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppModalHandler);
