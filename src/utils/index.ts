import {countries} from '../data';
import {JobsData} from '../types';

export const getRelocationStatus = (job: JobsData) =>
  job?.relocate === 'RemoteRelocate' ? 'Remote, then Relocate' : job?.relocate;

export const getCountry = (job: JobsData) =>
  job?.flagCode
    ? countries.filter(item => item.code === job?.flagCode)[0]?.name
    : undefined;

export const getSalary = (job: JobsData) => {
  let num = new Intl.NumberFormat('en-GB', {
    maximumSignificantDigits: 2,
  }).format(job?.salaryFrom);
  let num2 = new Intl.NumberFormat('en-GB', {
    maximumSignificantDigits: 2,
  }).format(job?.salaryTo);

  return `${job?.currency} ${num} - ${num2}`;
};
