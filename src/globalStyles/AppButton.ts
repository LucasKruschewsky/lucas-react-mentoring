import styled from 'styled-components';

interface Props {
  buttonStyle?: 'transparent' | 'default';
}

interface buttonStylesInterface {
  transparent: string;
  default: string;
}

const buttonStyles: buttonStylesInterface = {
  transparent: `
  background-color: rgba(var(--secondary), 0.8);
  color: rgb(var(--primary));
  &:hover {
    background-color: rgba(var(--secondary), 1);
  }
`,
  default: `
  background-color: rgb(var(--primary));
  color: rgb(var(--white));
  &:hover {
    background-color: rgba(var(--primary), 0.8);
    color: rgba(var(--white), 0.9);
  }
  `,
};

function applyButtonStyle(buttonStyle: Props['buttonStyle']): string {
  return buttonStyles[buttonStyle]
    ? buttonStyles[buttonStyle]
    : buttonStyles.default;
}

const AppButton = styled.button`
  text-transform: uppercase;
  padding: 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  border-color: transparent;

  transition: all 0.2s ease-in-out;

  ${(props: Props) => applyButtonStyle(props.buttonStyle)}
`;

export default AppButton;
