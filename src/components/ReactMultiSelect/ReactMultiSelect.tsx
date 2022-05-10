import { useField } from 'formik';
import * as React from 'react';
import Select from 'react-select';
import { styles } from './styles';
import { IMultiSelectProps, TMultiSelectOption } from './types';

const ReactMultiSelect: React.FunctionComponent<IMultiSelectProps> = ({
  options,
  placeholder,
  fieldName,
}) => {
  const field = useField(fieldName)[0];
  const helpers = useField(fieldName)[2];

  const mapOptionsToValues = React.useCallback(
    (selectedOptions: IMultiSelectProps['options']) =>
      selectedOptions.map((option) => option.value),
    []
  );

  const handleChange = React.useCallback(
    (selectedOptions: IMultiSelectProps['options']) => {
      const values = mapOptionsToValues(selectedOptions);
      helpers.setValue(values.length ? values : null, true);
    },
    [helpers, mapOptionsToValues]
  );

  const handleBlur = React.useCallback(
    () => helpers.setTouched(true),
    [helpers]
  );

  const getValues = React.useCallback(
    () =>
      options.filter((option: TMultiSelectOption) =>
        field.value?.includes(option.value)
      ),
    [field.value, options]
  );

  return (
    <Select
      onChange={handleChange}
      onBlur={handleBlur}
      value={getValues()}
      isMulti
      placeholder={placeholder}
      options={options}
      styles={styles}
    />
  );
};

export default ReactMultiSelect;
