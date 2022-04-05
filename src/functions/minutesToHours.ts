/**
 * Receive a time in minutes and returns
 * a string with the equivalent time in hours
 * @param minutes
 * @returns string with minutes equivalent in hours
 */

export const minutesToHours = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = Math.floor(minutes - 60 * hours);
  return `${hours}h ${mins}min`;
};
