import * as React from 'react';
import Select from 'react-select';
import { IMultiSelectProps } from './types';

const ReactMultiSelect: React.FunctionComponent<IMultiSelectProps> = ({
  options,
  placeholder,
  field,
  form,
}) => {
  const mapOptionsToValues = React.useCallback(
    (selectedOptions: any): any =>
      selectedOptions.map((option: any) => option.value),
    []
  );

  const handleChange = React.useCallback(
    (selectedOptions: any): any => {
      form.setFieldValue(field.name, mapOptionsToValues(selectedOptions), true);
    },
    [form, mapOptionsToValues, field.name]
  );

  const getValues = (): any =>
    options.filter((option: any): any =>
      form.values[field.name].includes(option.value)
    );
  const styles = React.useMemo(
    () => ({
      control: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: '#555555CC',
        borderColor: 'transparent',
        boxShadow: state.isActive ? '0 0 0 1px red' : '',
        minHeight: '44px',
        '&:hover': {
          borderColor: '#F65261',
        },
      }),
      option: (provided: any) => ({
        ...provided,
        borderColor: '#555555',
        backgroundColor: '#555555',
        color: '#F65261',
        '&:hover, &:active, &:focus': {
          backgroundColor: '#F65261',
          color: '#555555',
        },
      }),
      menuList: (provided: any) => ({
        ...provided,
        backgroundColor: '#555555',
      }),
    }),
    []
  );

  return (
    <Select
      onChange={handleChange}
      value={getValues()}
      isMulti
      placeholder={placeholder}
      options={options}
      styles={styles}
    />
  );
};

export default ReactMultiSelect;
