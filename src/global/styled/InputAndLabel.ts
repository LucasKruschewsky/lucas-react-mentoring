import styled from 'styled-components';
import 'Images/ArrowDown.png';

const inputCommonStyle: string = `
  border-radius: 4px;
  padding: 0.7rem;
  background-color: rgba(var(--secondary), 0.8);
  color: rgb(var(--white));
  font-size: var(--body1);
  border: none;
  height: 100%;

  &:focus {
    outline: 2px solid rgb(var(--primary));
  }
`;

export const Input = styled.input`
  &[type='date']::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  ${inputCommonStyle}
`;

export const Select = styled.select`
  ${inputCommonStyle}

  background: url(images/ArrowDown.png) no-repeat;
  background-position: 97% 50%;
  background-color: rgba(var(--secondary), 0.8);
  padding: 0.7rem 1.5rem 0.7rem 0.7rem;
`;

export const TextArea = styled.textarea`
  ${inputCommonStyle}
`;

export const Label = styled.label`
  color: rgb(var(--primary));
  font-size: 14px;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-transform: uppercase;

  /* Margin for label text */
  p {
    margin-bottom: 0.7rem;
  }
`;
