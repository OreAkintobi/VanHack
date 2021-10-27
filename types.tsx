import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text as DefaultText, View as DefaultView } from 'react-native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootStackParamList = {
  Camera: undefined;
  Jobs: undefined;
  Job: { job: JobsData };
  Success: { recording: string };
};

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

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
