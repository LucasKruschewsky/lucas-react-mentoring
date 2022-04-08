import * as React from 'react';
import AppButton from 'Global/styled/AppButton';
import { Form, Formik } from 'formik';
import { RootState } from '@/store/types';
import { useDispatch, useSelector } from 'react-redux';
import { TMovieObject } from '@/store/modules/movieList/types';
import { ADD, DELETE, EDIT } from '@/store/modules/modal/constants';
import { axiosRequest } from '@/functions/axiosRequest';
import {
  showFormTitle,
  addAndEditFormFields,
  emptyMovieObject,
  formValidationSchema,
  onSuccessfulRequest,
} from './helper';
import { IMovieFormProps } from './types';
import { FormContainer, ButtonRow, Title } from './style';

const MovieForm: React.FunctionComponent<IMovieFormProps> = ({
  type,
  movieId,
}) => {
  const dispatch = useDispatch();
  const formTitle = React.useMemo(() => showFormTitle(type), [type]);

  const initialValues = useSelector((state: RootState) => {
    if (movieId) {
      return state.movieList.list.filter(
        (movie) => Number(movie.id) === Number(movieId)
      )[0];
    }

    return emptyMovieObject;
  });

  const handleSubmitCreateEdit = React.useCallback(
    async (values: TMovieObject, actions): Promise<void> => {
      let response;
      if (values.id) {
        response = await axiosRequest('/movies', 'put', { ...values });
      } else {
        response = await axiosRequest('/movies', 'post', { ...values });
      }

      actions.setSubmitting(false);
      onSuccessfulRequest(response.status, dispatch);
    },
    [dispatch]
  );

  const handleSubmitDelete = React.useCallback(
    async (values: TMovieObject, actions): Promise<void> => {
      const response = await axiosRequest(`/movies/${values.id}`, 'delete');

      actions.setSubmitting(false);

      onSuccessfulRequest(response.status, dispatch);
    },
    [dispatch]
  );

  const resetForm = React.useCallback((form) => form.resetForm, []);

  return (
    <>
      <Title>{formTitle}</Title>
      {(type === ADD || type === EDIT) && (
        <FormContainer>
          <Formik
            validationSchema={formValidationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmitCreateEdit}
          >
            {(form) => (
              <Form>
                {addAndEditFormFields(form)}
                <ButtonRow>
                  <AppButton
                    onClick={resetForm(form)}
                    type="button"
                    buttonStyle="defaultOutlined"
                  >
                    Reset
                  </AppButton>
                  <AppButton type="submit">Submit</AppButton>
                </ButtonRow>
              </Form>
            )}
          </Formik>
        </FormContainer>
      )}
      {type === DELETE && (
        <FormContainer>
          <Formik initialValues={initialValues} onSubmit={handleSubmitDelete}>
            <Form>
              <p>Are you sure you want to delete this movie?</p>
              <ButtonRow>
                <AppButton type="submit">Confirm</AppButton>
              </ButtonRow>
            </Form>
          </Formik>
        </FormContainer>
      )}
    </>
  );
};

export default MovieForm;
