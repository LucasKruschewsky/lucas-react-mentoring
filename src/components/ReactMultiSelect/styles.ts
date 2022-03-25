import { ControlProps, CSSObjectWithLabel } from 'react-select';

export const styles = {
  control: (provided: CSSObjectWithLabel, state: ControlProps) => ({
    ...provided,
    backgroundColor: '#555555CC',
    border: `2px solid ${state.isFocused ? '#F65261' : 'transparent'}`,
    boxShadow: 'none',
    minHeight: '44px',
    '&:hover': {
      borderColor: '#F65261',
    },
  }),
  option: (provided: CSSObjectWithLabel) => ({
    ...provided,
    borderColor: '#555555',
    backgroundColor: '#555555',
    color: '#F65261',
    '&:hover, &:active, &:focus': {
      backgroundColor: '#F65261',
      color: '#555555',
    },
  }),
  menuList: (provided: CSSObjectWithLabel) => ({
    ...provided,
    backgroundColor: '#555555',
  }),
};
