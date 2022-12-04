import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

function Stats(game) {
  const theme = useTheme();

  return (
    <Box
      width='30%'
      sx={{
        color: '#fff',
        bgcolor: '#000',
        borderRight: `10px groove ${theme.palette.primary.main}`,
        opacity: '0.90',
      }}
    >
      Stats
      <Typography>Total Toes:  {}</Typography>
      <button onClick={() => {
          game.calcTotalToes();
          
         
         
          
        }}></button>
    </Box>
  );
}

export default Stats;
