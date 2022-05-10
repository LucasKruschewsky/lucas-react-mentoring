export type TMultiSelectOption = {
  value: string;
  label: string;
};

export interface IMultiSelectProps {
  options: TMultiSelectOption[];
  placeholder: string;
  fieldName: string;
}
