import { parseDate } from './parseDate';
import { minutesToHours } from './minutesToHours';

describe('parseDate function', () => {
  const dateToParse = '2018-02-01';
  const parsedDateYear = '2018';
  const parsedDate = '01/02/2018';

  it('Outputs correct value when parseOutput is year', () => {
    const parseDateOutputWithYear = parseDate(dateToParse, 'year');

    expect(parseDateOutputWithYear).toBe(parsedDateYear);
  });

  it('Outputs correct value when parseOutput is not given', () => {
    const parseDateOutputWithNoYear = parseDate(dateToParse);

    expect(parseDateOutputWithNoYear).toBe(parsedDate);
  });
});

describe('minutesToHours function', () => {
  const timeInMinutes = 150;
  const timeInHours = '2h 30min';

  it('Outputs correct time in hours when input is a number', () => {
    const minutesToHoursOutput = minutesToHours(timeInMinutes);

    expect(minutesToHoursOutput).toBe(timeInHours);
  });

  it('Outputs correct time in hours when input is a string', () => {
    const minutesToHoursOutput = minutesToHours(String(timeInMinutes));

    expect(minutesToHoursOutput).toBe(timeInHours);
  });
});

describe('retrieveSearchParams function', () => {});
