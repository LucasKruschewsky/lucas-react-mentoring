import * as React from 'react';
import AppButton from 'Global/styled/AppButton';
import { Form, Formik } from 'formik';
import { RootState } from '@/store/types';
import { useSelector } from 'react-redux';
import {
  showFormTitle,
  addAndEditFormFields,
  emptyMovieObject,
  handleSubmitForm,
} from './helper';
import { IMovieFormProps } from './types';
import { FormContainer, ButtonRow, Title } from './style';

const MovieForm: React.FunctionComponent<IMovieFormProps> = ({
  type,
  movieId,
}) => {
  const formTitle = React.useMemo(() => showFormTitle(type), [type]);

  const initialValues = useSelector((state: RootState) => {
    if (movieId) {
      return state.movieList.list.filter(
        (movie) => Number(movie.id) === Number(movieId)
      )[0];
    }

    return emptyMovieObject;
  });

  return (
    <>
      <Title>{formTitle}</Title>
      {(type === 'add' || type === 'edit') && (
        <FormContainer>
          <Formik initialValues={initialValues} onSubmit={handleSubmitForm}>
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
