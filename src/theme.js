import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
  palette: {
    primary: {
      light: 'rgba(255, 255, 255, 0.54)',
      main: '#90a4ae',
      dark: '#616161',
      contrastText: '#ffffff',
    },
  },
  shape: {
    borderRadius: 4
  }
}
});

export default theme;

// pushing this for theme but not sure if it will 
// work because the page isn't loading for me - Tamekia