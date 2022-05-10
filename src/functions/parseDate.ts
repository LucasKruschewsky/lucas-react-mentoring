type TParseDateOutput = 'year' | 'DD/MM/YYYY';

/**
 * Receive a date e.g 2018-02-01 and return
 * a string with the date formatted in
 * parseOutput format
 * @param date
 * @param parseOutput
 * @returns date in parseOutput format
 */

export const parseDate = (
  date: string,
  parseOutput?: TParseDateOutput
): string => {
  if (parseOutput === 'year') {
    return new Date(date).toLocaleDateString('en-UK', {
      year: 'numeric',
    });
  }

  // Default date return will be DD/MM/YYYY
  return new Date(date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};
