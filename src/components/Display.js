import { Box, Typography, Stack } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import DonutImage from '../assets/donutImage.png';
import Background from '../assets/background.jpg';
const DonutSpin = ({ game }) => {
  return (
    <Stack
      direction={'row'}
      justifyContent={'center'}
      sx={{
        '&:hover': {
          cursor: 'pointer',
          transform: 'scale(1.01)',
        },
        '&:active': {
          transform: 'scale(0.99)',
        },
      }}
    >
      <Box
        component='img'
        sx={{
          width: 400,
          height: 400,
          animation: 'spin 15s linear infinite',
          '@keyframes spin': {
            '0%': {
              transform: 'rotate(360deg)',
            },
            '100%': {
              transform: 'rotate(0deg)',
            },
          },
        }}
        src={DonutImage}
        onClick={() => game.donutGame.clickDonut()}
      />
    </Stack>
  );
};

const Display = ({ game }) => {
  const theme = useTheme();

  return (
    <Stack
      width={'50%'}
      spacing={-10}
      justifyContent='space-around'
      direction='column'
      alignItems={'stretch'}
      sx={{ borderRight: `10px groove ${theme.palette.primary.main}` }}
    >
      <Box sx={{ p: 2, bgcolor: '#000', opacity: '0.5' }}>
        <Typography variant='h6' align='center' color='white'>
          {game.donutGame.gameName}
        </Typography>
      </Box>
      <Stack sx={{ p: 3, bgcolor: '#000', opacity: '0.5' }} spacing={3}>
        <Typography variant='h5' align='center' color='white'>
          {game.donutGame.donuts} Cookies
        </Typography>
        <Typography variant='p' align='center' color='white'>
          per second: rate
        </Typography>
      </Stack>
      <DonutSpin game={game} />;
    </Stack>
  );
};

export default Display;
