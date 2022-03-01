/* Disabled eslint until svg imported  */
/* eslint-disable max-len */

import styled from 'styled-components';

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
  /* SVG needs to be imported from an svg file */
  background: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")
    no-repeat right;
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
