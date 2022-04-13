import * as React from 'react';
import AppButton from 'Global/styled/AppButton';
import { Form, Formik, FormikHelpers, FormikProps, FormikValues } from 'formik';
import { RootState } from 'Root/store/types';
import { useDispatch, useSelector } from 'react-redux';
import { TMovieObject } from 'Root/store/modules/movieList/types';
import { ADD, DELETE, EDIT } from 'Root/store/modules/modal/constants';
import { axiosRequest } from 'Root/functions/axiosRequest';
import { closeModal } from 'Root/store/modules/modal';
import { getMoviesFromSearch } from 'Root/store/modules/movieList';
import { useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  showFormTitle,
  addAndEditFormFields,
  emptyMovieObject,
  formValidationSchema,
} from './helper';
import { IMovieFormProps } from './types';
import { FormContainer, ButtonRow, Title } from './style';

const MovieForm: React.FunctionComponent<IMovieFormProps> = ({
  type,
  movieId,
}) => {
  const dispatch = useDispatch();
  const { searchQuery } = useParams();
  const [searchParams] = useSearchParams();
  const formTitle = React.useMemo(() => showFormTitle(type), [type]);

  const initialValues = useSelector((state: RootState) => {
    if (movieId) {
      return state.movieList.list.filter(
        (movie) => Number(movie.id) === Number(movieId)
      )[0];
    }

    return emptyMovieObject;
  });

  const handleSubmit = React.useCallback(
    async (
      values: TMovieObject,
      actions: FormikHelpers<FormikValues>
    ): Promise<void> => {
      let response;
      if (type === DELETE) {
        response = await axiosRequest(`/movies/${values.id}`, 'delete');
      }
      if (type === EDIT) {
        response = await axiosRequest('/movies', 'put', { ...values });
      }

      if (type === ADD) {
        response = await axiosRequest('/movies', 'post', { ...values });
      }

      actions.setSubmitting(false);

      // If request is successful
      if (response.status < 400) {
        toast.success(
          `Movie successfully ${type === DELETE ? 'delet' : type}ed`
        );
        dispatch(closeModal());
        dispatch(
          getMoviesFromSearch({
            searchQuery,
            genre: searchParams.getAll('genre'),
            sortBy: searchParams.get('sortBy'),
            sortOrder: searchParams.get('sortOrder'),
          })
        );
      }
    },
    [dispatch, searchQuery, searchParams, type]
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
            onSubmit={handleSubmit}
          >
            {(form: FormikProps<TMovieObject>) => (
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
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
