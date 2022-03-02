import * as React from 'react';
import AppButton from 'Styles/AppButton';
import { IMovieFormProps } from './types';
import { Form, ButtonRow, Title } from './style';
import { showFormTitle, addAndEditFormFields } from './helper';

const MovieForm: React.FunctionComponent<IMovieFormProps> = ({ type }) => (
  <>
    <Title>{showFormTitle(type)}</Title>
    {type === ('add' || 'edit') && (
      <Form>
        {addAndEditFormFields}
        <ButtonRow>
          <AppButton buttonStyle="defaultOutlined">Reset</AppButton>
          <AppButton>Submit</AppButton>
        </ButtonRow>
      </Form>
    )}
    {type === 'delete' && (
      <Form>
        <p>Are you sure you want to delete this movie?</p>
        <ButtonRow>
          <AppButton>Confirm</AppButton>
        </ButtonRow>
      </Form>
    )}
  </>
);

export default MovieForm;
