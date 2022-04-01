import styled from 'styled-components';

export const Container404 = styled.div`
  padding-top: var(--offset-header);
  min-height: 75.5vh;

  .button-link {
    text-decoration: none;
  }

  div {
    background-color: rgb(var(--white));
    padding: 2rem;
    border-radius: 4px;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: var(--title-1);
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: var(--body-1);
    }

    p {
      margin-bottom: 1rem;
    }

    button {
      width: fit-content;
    }
  }
`;
