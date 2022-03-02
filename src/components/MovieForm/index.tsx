import * as React from 'react';
import AppButton from 'Styles/AppButton';
import { Label, Input, Select, TextArea } from 'Styles/InputAndLabel';
import { IMovieFormProps } from './types';
import { Form, ButtonRow, Title } from './style';
import { showFormTitle } from './helper';

const MovieForm: React.FunctionComponent<IMovieFormProps> = ({ type }) => (
  <>
    <Title>{showFormTitle(type)}</Title>
    <Form action="">
      <Label>
        Title
        <Input type="text" placeholder="Movie Title" />
      </Label>

      <Label>
        Release Date
        <Input type="date" placeholder="Select Date" />
      </Label>

      <Label>
        Movie Url
        <Input type="text" placeholder="https://" />
      </Label>

      <Label>
        Rating
        <Input type="text" placeholder="7.8" />
      </Label>

      <Label>
        Genre
        <Select>
          <option defaultValue="none" disabled>
            Select Genre
          </option>
        </Select>
      </Label>

      <Label>
        Runtime
        <Input type="text" placeholder="minutes" />
      </Label>

      <Label id="add-movie-textarea">
        Overview
        <TextArea rows={7} placeholder="Movie description" />
      </Label>

      <ButtonRow>
        <AppButton buttonStyle="defaultOutlined">Reset</AppButton>
        <AppButton type="submit" buttonStyle="default">
          Submit
        </AppButton>
      </ButtonRow>
    </Form>
  </>
);

export default MovieForm;
