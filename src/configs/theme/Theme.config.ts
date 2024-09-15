import { ThemeOptions, createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    buttonColors?: {
      red?: string;
      yellow?: string;
      green?: string;
      blue?: string;
    };
    backgroundContentColors?: {
      contentBox?: string;
      paper?: string;
      placeholders?: string;
      green?: string;
      red?: string;
    };
    selectionColors?: {
      darkBlue?: string;
      lightBlue?: string;
      darkGreen?: string;
      lightGreen?: string;
      darkRed?: string;
      lightRed?: string;
    };
    textColors?: {
      grey?: string;
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
      contentBox?: string;
      paper?: string;
      placeholders?: string;
      green?: string;
      red?: string;
    };
    selectionColors?: {
      darkBlue?: string;
      lightBlue?: string;
      darkGreen?: string;
      lightGreen?: string;
      darkRed?: string;
      lightRed?: string;
    };
    textColors?: {
      grey?: string;
    };
  }
}

export const theme: ThemeOptions = createTheme({
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: 0,
          '& .MuiGrid-item': {
            //padding: '1.5rem 1rem',
          },
          '& .MuiButton-text': {
            border: 'none',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          top: 'unset',
          backgroundColor: '#FFF',
          border: 'none',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#A4A4A8',
          '&.Mui-checked': {
            color: '#65B741',
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#fff',
          color: '#3e8022',
          fontSize: '14px',
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #3e8022',
          fontWeight: 'bold',
          widht: 'auto',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
  },
  palette: {
    primary: {
      main: '#FFFFFF',
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
    contentBox: '#FFF',
    paper: '#C8C8C8',
    placeholders: '#D9D9D9',
    green: '#65B741',
    red: '#FF010B',
  },
  selectionColors: {
    darkBlue: '#3170DC',
    lightBlue: '#C9E0E7',
    darkGreen: '#1EB054',
    lightGreen: '#BADBAC',
    darkRed: '#FF020C',
    lightRed: '#FF878C',
  },
  textColors: {
    grey: '#6B7280',
  },
});
