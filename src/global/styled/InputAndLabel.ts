import styled from 'styled-components';
import 'Images/ArrowDown.png';

const inputCommonStyle: string = `
  border-radius: 4px;
  padding: 0.7rem;
  background-color: rgba(var(--secondary), 0.8);
  color: rgb(var(--white));
  font-size: var(--body1);
  border: none;
  margin-top: 0.7rem;
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
  background: url(images/ArrowDown.png) no-repeat;
  background-position: 97% 50%;
  background-color: rgba(var(--secondary), 0.8);

  ${inputCommonStyle}
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
`;
