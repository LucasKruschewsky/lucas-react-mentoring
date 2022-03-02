import styled from 'styled-components';

export const Form = styled.form`
  display: grid;
  grid-gap: 1.5rem 1rem;
  grid-template-columns: 4fr 2fr;

  #add-movie-textarea {
    grid-column: 1 / -1;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column: 1 / -1;
  margin-top: 2rem;

  button {
    margin-left: 0.5rem;
    min-width: 25%;
  }
`;

export const Title = styled.h1`
  font-size: var(--title-1);
  margin-bottom: 2rem;
  text-transform: uppercase;
`;
