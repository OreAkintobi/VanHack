export interface JobsData {
  area: string;
  canApply: false;
  companyName: string;
  createdAt: string;
  currency: string;
  description: string;
  flagCode: string;
  id: number;
  jobType: string;
  location: string;
  numberOfPositions: number;
  relocate: 'Relocate' | 'Remote' | 'RemoteRelocate';
  salaryFrom: number;
  salaryTo: number;
  skills: string;
  slug: string;
  title: string;
  totalHires: number;
}
