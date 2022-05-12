import { retrieveAllSearchParams } from 'Root/functions/retrieveSearchParams';
import { useSearchParams } from 'react-router-dom';
import { ISearchParamsObject, TUseCustomSearchParams } from './types';

const useCustomSearchParams = (): TUseCustomSearchParams => {
  const [searchParams, setSearchParams] = useSearchParams();

  const addSearchParams = (searchParamsObject: ISearchParamsObject): void => {
    setSearchParams({
      ...retrieveAllSearchParams(searchParams),
      ...searchParamsObject,
    });
  };

  return [searchParams, addSearchParams];
};

export default useCustomSearchParams;
