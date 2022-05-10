/**
 * Checks if param value exists in the URLSearchParams
 * and return an object to be used by React Router Dom
 * setSearchParams function.
 * @param searchParam
 * @param param
 * @returns Object => [param]: value or [] if value is null
 */
export const retrieveSingleSearchParam = (
  searchParam: URLSearchParams,
  param: string
): object => {
  if (param === 'genre') {
    return {
      [param]: searchParam.has(param) ? searchParam.getAll(param) : [],
    };
  }

  return {
    [param]: searchParam.has(param) ? searchParam.get(param) : [],
  };
};

/**
 * Retrieves all search params used in this application
 * and returns an object to be used by React Router Dom
 * setSearchParams function. Params being used at this point:
 * sortBy, sortOrder, genre, movie
 * @param searchParam
 */
export const retrieveAllSearchParams = (
  searchParam: URLSearchParams
): object => ({
  genre: searchParam.has('genre') ? searchParam.getAll('genre') : [],
  sortOrder: searchParam.has('sortOrder') ? searchParam.get('sortOrder') : [],
  sortBy: searchParam.has('sortBy') ? searchParam.get('sortBy') : [],
  movie: searchParam.has('movie') ? searchParam.get('movie') : [],
});
