import * as React from 'react';
import AppButton from 'Global/styled/AppButton';
import { Form, Formik } from 'formik';
import { RootState } from '@/store/types';
import { useDispatch, useSelector } from 'react-redux';
import { TMovieObject } from '@/store/modules/movieList/types';
import {
  showFormTitle,
  addAndEditFormFields,
  emptyMovieObject,
  handleSubmitCreateEdit,
  formValidationSchema,
  handleSubmitDelete,
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

  return (
    <>
      <Title>{formTitle}</Title>
      {(type === 'add' || type === 'edit') && (
        <FormContainer>
          <Formik
            validationSchema={formValidationSchema}
            initialValues={initialValues}
            onSubmit={(values: TMovieObject, actions) =>
              handleSubmitCreateEdit(values, actions, dispatch)
            }
          >
            {({ errors, touched }) => (
              <Form>
                {addAndEditFormFields(errors, touched)}
                <ButtonRow>
                  <AppButton buttonStyle="defaultOutlined">Reset</AppButton>
                  <AppButton type="submit">Submit</AppButton>
                </ButtonRow>
              </Form>
            )}
          </Formik>
        </FormContainer>
      )}
      {type === 'delete' && (
        <FormContainer>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) =>
              handleSubmitDelete(values, actions, dispatch)
            }
          >
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
