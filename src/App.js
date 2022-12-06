import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import DonutClicker from './components/DonutClicker';
import Background from './assets/background.jpg';

/**
 * This function creates the theme of the game.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#FED706',
    },
    secondary: {
      main: '#67294E',
    },
  },
});

/**
 * This function displays the game screen which includes the theme, donut, and the background
 * @returns The game screen which includes the theme, donut, and background.
 */
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        data-testid='app-wrapper'
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          border: `5px outset ${theme.palette.primary.main}`,
        }}
      >
        <DonutClicker />
      </Box>
    </ThemeProvider>
  );
};

export default App;
