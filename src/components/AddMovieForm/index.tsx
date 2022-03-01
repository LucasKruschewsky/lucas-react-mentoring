import * as React from 'react';
import AppButton from 'Styles/AppButton';
import { Label, Input, Select, TextArea } from 'Styles/InputAndLabel';
import { Form, ButtonRow } from './style';

const AddMovieForm: React.FunctionComponent = () => (
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
        <option selected disabled value="none">
          Select Genre
        </option>
      </Select>
    </Label>

    <Label>
      Runtinme
      <Input type="text" placeholder="minutes" />
    </Label>

    <Label id="add-movie-textarea">
      Runtinme
      <TextArea rows={7} placeholder="Movie description" />
    </Label>

    <ButtonRow>
      <AppButton buttonStyle="defaultOutlined">Reset</AppButton>
      <AppButton type="submit" buttonStyle="default">
        Submit
      </AppButton>
    </ButtonRow>
  </Form>
);

export default AddMovieForm;
