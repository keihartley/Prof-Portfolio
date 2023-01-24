import { createTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
      palette: {
        primary: {
          main: string,
          light: string,
          dark: string,
        },
        secondary: {
          main: string,
          light: string,
          dark: string,
        },
        background: {
          default: string,
          paper: string
        },
        text: {
          primary: string,
          secondary: string,
        },
        divider: string
      }
    }
  }

export const theme = createTheme({
  palette: {
    primary: {
      main: "#A5C5E9",
      light: '#B7D0ED',
      dark: '#7389A3'
    },
    secondary: {
      main: "#E9C9A5",
      light: '#EDD3B7',
      dark: '#A38C73'
    },
    background: {
      default: "#141419",
      paper: "#3A3A3E"
    },
    text: {
      primary: "#EBEBEB",
      secondary: "#D1D1D1",
    },
    divider: "#878787"
  },
});
