import * as React from 'react';
import AppButton from 'Global/styled/AppButton';
import { ADD, DELETE, EDIT } from '@/store/modules/modal/constants';
import { IMovieFormProps } from './types';
import { Form, ButtonRow, Title } from './style';
import { showFormTitle, addAndEditFormFields } from './helper';

const MovieForm: React.FunctionComponent<IMovieFormProps> = ({ type }) => {
  const formTitle = React.useMemo(() => showFormTitle(type), [type]);

  return (
    <>
      <Title>{formTitle}</Title>
      {(type === ADD || type === EDIT) && (
        <Form>
          {addAndEditFormFields}
          <ButtonRow>
            <AppButton buttonStyle="defaultOutlined">Reset</AppButton>
            <AppButton>Submit</AppButton>
          </ButtonRow>
        </Form>
      )}
      {type === DELETE && (
        <Form>
          <p>Are you sure you want to delete this movie?</p>
          <ButtonRow>
            <AppButton>Confirm</AppButton>
          </ButtonRow>
        </Form>
      )}
    </>
  );
};

export default MovieForm;
