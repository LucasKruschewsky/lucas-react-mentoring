import styled from 'styled-components';
import 'Images/ArrowDown.png';

const inputCommonStyle: string = `
  border-radius: 4px;
  padding: 0.7rem;
  background-color: rgba(var(--secondary), 0.8);
  color: rgb(var(--white));
  font-size: var(--body1);
  border: none;

  &:focus {
    outline: 2px solid rgb(var(--primary));
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 44px;
  input {
    flex-grow: 1;
    &[type='date']::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
    ${inputCommonStyle}
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  height: 44px;
  select,
  #react-select {
    ${inputCommonStyle}
    flex-grow: 1;

    background: url('/images/ArrowDown.png') no-repeat;
    background-position: 97% 50%;
    background-color: rgba(var(--secondary), 0.8);
    padding: 0.7rem 1.5rem 0.7rem 0.7rem;
  }
`;

export const TextAreaWrapper = styled.div`
  display: flex;
  height: 100%;
  textarea {
    flex-grow: 1;
    ${inputCommonStyle}
  }
`;

export const Label = styled.label`
  color: rgb(var(--primary));
  font-size: 14px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  text-transform: uppercase;

  /* Margin for label text */
  p {
    margin-bottom: 0.7rem;
  }

  .formik-error-message {
    margin-top: 1rem;
    font-size: 12px;
    text-decoration: underline;
  }
`;
