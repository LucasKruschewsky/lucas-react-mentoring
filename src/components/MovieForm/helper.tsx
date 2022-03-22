import * as React from 'react';
import * as Yup from 'yup';
import { axiosRequest } from '@/functions/axiosRequest';
import {
  InputWrapper,
  Label,
  TextAreaWrapper,
  SelectWrapper,
} from 'Global/styled/InputAndLabel';
import {
  Field,
  FormikErrors,
  FormikHelpers,
  FormikTouched,
  FormikValues,
} from 'formik';
import { TMovieObject } from '@/store/modules/movieList/types';
import { TStoreDispatch } from '@/store/types';
import { closeModal } from '@/store/modules/modal';
import { getAllMovies } from '@/store/modules/movieList';
import { IAddAndEditFields, IMovieFormFields, IMovieFormProps } from './types';

export const emptyMovieObject: TMovieObject = {
  title: '',
  vote_average: 0,
  release_date: '',
  poster_path: '',
  overview: '',
  runtime: 0,
  genres: ['Comedy', 'Drama', 'Romance'],
};

export const formValidationSchema = Yup.object().shape({
  title: Yup.string().max(50, 'Title is too long').required(),
  release_date: Yup.string().required(),
  genres: Yup.array().of(Yup.string()),
  poster_path: Yup.string().required(),
  vote_average: Yup.number(),
  runtime: Yup.number().required(),
  overview: Yup.string().required(),
});

const movieFormFields: IMovieFormFields = {
  addAndEdit: [
    {
      label: 'Title',
      name: 'title',
      type: 'text',
      placeholder: 'Movie Title',
    },
    {
      label: 'Release Date',
      name: 'release_date',
      type: 'date',
      placeholder: 'Select Date',
    },
    {
      label: 'Movie Url',
      name: 'poster_path',
      type: 'text',
      placeholder: 'https://',
    },
    {
      label: 'Rating',
      name: 'vote_average',
      type: 'number',
      placeholder: '7.8',
    },
    {
      label: 'Genre',
      name: 'genres',
      type: 'select',
      placeholder: 'Select Genre',
    },
    {
      label: 'Runtime',
      name: 'runtime',
      type: 'number',
      placeholder: 'minutes',
    },
    {
      label: 'Overview',
      name: 'overview',
      type: 'textarea',
      placeholder: 'Movie Description',
    },
  ],
};

export const showFormTitle = (type: IMovieFormProps['type']): string => {
  if (type === 'add') return 'Add Movie';
  if (type === 'edit') return 'Edit Movie';
  if (type === 'delete') return 'Delete Movie';

  return 'Form Title';
};

export const displayFormikError = (
  errors: FormikErrors<FormikValues>,
  touched: FormikTouched<FormikValues>,
  field: IAddAndEditFields
): React.ReactElement =>
  errors[field.name] && touched[field.name] ? (
    <div className="formik-error-message">{errors[field.name]}</div>
  ) : null;

export const addAndEditFormFields = (
  errors: FormikErrors<FormikValues>,
  touched: FormikTouched<FormikValues>
): React.ReactElement[] =>
  movieFormFields.addAndEdit.map((field): React.ReactElement => {
    if (field.type === 'textarea') {
      return (
        <Label key={`${field.label}-${field.type}`} id="add-movie-textarea">
          <p>{field.label}</p>
          <TextAreaWrapper>
            <Field
              name={field.name}
              as="textarea"
              rows={7}
              placeholder={field.placeholder}
            />
          </TextAreaWrapper>
          {errors[field.name] && touched[field.name] ? (
            <div className="formik-error-message">{errors[field.name]}</div>
          ) : null}
        </Label>
      );
    }

    if (field.type === 'select') {
      return (
        <Label key={`${field.label}-${field.type}`}>
          <p>{field.label}</p>
          <SelectWrapper>
            <Field name={field.name} value="default-disabled-value" as="select">
              <option value="default-disabled-value" disabled>
                {field.placeholder}
              </option>
            </Field>
          </SelectWrapper>
          {errors[field.name] && touched[field.name] ? (
            <div className="formik-error-message">{errors[field.name]}</div>
          ) : null}
        </Label>
      );
    }

    // Default return for type text/date
    return (
      <Label key={`${field.label}-${field.type}`}>
        <p>{field.label}</p>
        <InputWrapper>
          <Field
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
          />
        </InputWrapper>
        {errors[field.name] && touched[field.name] ? (
          <div className="formik-error-message">{errors[field.name]}</div>
        ) : null}
      </Label>
    );
  });

// Temporary handle submit form
// Try catch will be handled inside axiosRequest at some point
export const handleSubmitCreateEdit = async (
  values: TMovieObject,
  actions: FormikHelpers<FormikValues>,
  dispatch: TStoreDispatch
): Promise<void> => {
  try {
    if (values.id) {
      await axiosRequest('/movies', 'put', { ...values });
    } else {
      await axiosRequest('/movies', 'post', { ...values });
    }

    dispatch(closeModal());
    dispatch(getAllMovies());
    actions.setSubmitting(false);
  } catch (e) {
    console.log(e);
    actions.setSubmitting(false);
  }
};

export const handleSubmitDelete = async (
  values: TMovieObject,
  actions: FormikHelpers<FormikValues>,
  dispatch: TStoreDispatch
): Promise<void> => {
  await axiosRequest(`/movies/${values.id}`, 'delete');
  dispatch(closeModal());
  dispatch(getAllMovies());
  actions.setSubmitting(false);
};

// Example handle submit formik
/**
  console.log({ values, actions });
  alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false);
 */
