import DonutClicker from './components/DonutClicker';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box
      sx={{
        backgroundImage: URL('.//donut.jpeg'),
        height: '100vh',

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <DonutClicker />
    </Box>
  );
};

export default App;
