export type ISearchParamsObject = {
  [key: string]: string | Array<null>;
};

export type TUseCustomSearchParams = [
  URLSearchParams,
  (searchParamsObject: ISearchParamsObject) => void
];
