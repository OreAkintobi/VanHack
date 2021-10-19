import moment from 'moment';
import {countries} from '../data';
import {JobsData} from '../types';

export const getRelocationStatus = (relocateStatus: string) =>
  relocateStatus === 'RemoteRelocate'
    ? 'Remote, then Relocate'
    : relocateStatus;

export const getCountry = (flagCode: string) =>
  flagCode
    ? countries.filter(item => item.code === flagCode)[0]?.name
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

export const getJobPostingTimeFromNow = (date: string) => {
  return moment(date).fromNow();
};
