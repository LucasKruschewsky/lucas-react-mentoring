import styled from 'styled-components';

interface IProps {
  buttonStyle?: 'transparent' | 'defaultOutlined' | 'default';
}

interface IButtonStyles {
  transparent: string;
  defaultOutlined: string;
  default: string;
}

const buttonStyles: IButtonStyles = {
  transparent: `
  background-color: rgba(var(--secondary), 0.8);
  color: rgb(var(--primary));
  &:hover {
    background-color: rgba(var(--secondary), 1);
  }
`,
  defaultOutlined: `
  background-color: transparent;
  color: rgb(var(--primary));
  border: 1px solid rgb(var(--primary));
  &:hover {
    background-color: rgba(var(--white), 0.1);
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

function applyButtonStyle(buttonStyle: IProps['buttonStyle']): string {
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

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease-in-out;

  ${(props: IProps) => applyButtonStyle(props.buttonStyle)}

  svg, img {
    margin-right: 0.5rem;
  }
`;

export default AppButton;
