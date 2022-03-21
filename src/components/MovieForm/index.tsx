import * as React from 'react';
import AppButton from 'Global/styled/AppButton';
import { Form, Formik } from 'formik';
import {
  showFormTitle,
  addAndEditFormFields,
  emptyMovieObject,
} from './helper';
import { IMovieFormProps } from './types';
import { FormContainer, ButtonRow, Title } from './style';

const MovieForm: React.FunctionComponent<IMovieFormProps> = ({ type }) => {
  const formTitle = React.useMemo(() => showFormTitle(type), [type]);

  return (
    <>
      <Title>{formTitle}</Title>
      {type === 'add' && (
        <FormContainer>
          <Formik
            initialValues={emptyMovieObject}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            <Form>
              {addAndEditFormFields}
              <ButtonRow>
                <AppButton buttonStyle="defaultOutlined">Reset</AppButton>
                <AppButton>Submit</AppButton>
              </ButtonRow>
            </Form>
          </Formik>
        </FormContainer>
      )}
      {type === 'edit' && (
        <FormContainer>
          <Formik
            initialValues={emptyMovieObject}
            onSubmit={(values, actions) => {
              console.log({ values, actions });
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
          >
            <Form>
              {addAndEditFormFields}
              <ButtonRow>
                <AppButton buttonStyle="defaultOutlined">Reset</AppButton>
                <AppButton>Submit</AppButton>
              </ButtonRow>
            </Form>
          </Formik>
        </FormContainer>
      )}
      {type === 'delete' && (
        <FormContainer>
          <p>Are you sure you want to delete this movie?</p>
          <ButtonRow>
            <AppButton>Confirm</AppButton>
          </ButtonRow>
        </FormContainer>
      )}
    </>
  );
};

export default MovieForm;
