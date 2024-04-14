import { ThemeOptions, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    buttonColors?: {
      red?: string;
      yellow?: string;
      green?: string;
      blue?: string;
    };
    backgroundContentColors?: {
      default?: string;
      primary?: string;
      secondary?: string;
    };
    selectionColors?: {
      darkBlue?: string;
      lightBlue?: string;
      darkGreen?: string;
      lightGreen?: string;
      darkRed?: string;
      lightRed?: string;
    };
  }
}

export const theme: ThemeOptions = createTheme({
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
  },
  palette: {
    primary: {
      main: '##FFFFFF',
    },
    secondary: {
      main: '#000000',
    },
    info: {
      main: '#4286B8',
    },
    success: {
      main: '#65B741',
    },
    error: {
      main: '#FF4048',
    },
    warning: {
      main: '#EAB308',
    },
    text: {
      primary: '#3A3A3A',
      secondary: '#A4A4A8',
    },
  },
  buttonColors: {
    red: '#FF4048',
    yellow: '#EAB308',
    green: '#65B741',
    blue: '#4286B8',
  },
  backgroundContentColors: {
    default: '#F3F3F3',
    primary: '#E5E5E5',
    secondary: '#D9D9D9',
  },
  selectionColors: {
    darkBlue: '#3170DC',
    lightBlue: '#C9E0E7',
    darkGreen: '#1EB054',
    lightGreen: '#BADBAC',
    darkRed: '#FF020C',
    lightRed: '#FF878C',
  },
});
