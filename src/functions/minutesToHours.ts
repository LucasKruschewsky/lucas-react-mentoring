/**
 * Receive a string time in minutes and returns
 * a string with the equivalent time in hours
 * @param minutes
 * @returns string with minutes equivalent in hours
 */

export const minutesToHours = (minutes: string): string => {
  const hours = Math.floor(Number(minutes) / 60);
  const mins = Math.floor(Number(minutes) - 60 * hours);
  return `${hours}h ${mins}min`;
};
