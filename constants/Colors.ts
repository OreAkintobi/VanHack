const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const lightGray = '#a8b0b0';
const darkGray = '#3a3b43';

const common = {
  danger: 'red',
  success: '#40975d',
  vanHackBlue: '#0575ce',
};

export default {
  light: {
    text: '#000',
    textSecondary: darkGray,
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    bottomTab: lightGray,
    jobListItem: '',
    ...common,
  },
  dark: {
    text: '#fff',
    textSecondary: lightGray,
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    bottomTab: darkGray,
    jobListItem: '',
    ...common,
  },
};

export const colors: IColors = {
  black: '#1c1c25',
  darkGray: '#3a3b43',
  darkSlateGray: '#272831',
  lightGray: '#a8b0b0',
  mediumGray: '#aaaeb7',
  offBlack: '#1c1c25',
  seaGreen: '#40975d',
  vanHackBlue: '#0575ce',
  white: '#ffffff',
};

export interface IColors {
  black: string;
  darkGray: string;
  darkSlateGray: string;
  lightGray: string;
  mediumGray: string;
  offBlack: string;
  seaGreen: string;
  vanHackBlue: string;
  white: string;
}
