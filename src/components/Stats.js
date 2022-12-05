import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

function Stats({ game }) {
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
     Welcome to Donut Clicker
      
      <Typography>  Toe Rate: {game.combinedToesRates} 🍩/sec </Typography>
       <Typography> Interns Rate: {game.combinedInternRates} 🍩/sec</Typography>
       <Typography> Cooks Rate: {game.combinedCookRates} 🍩/sec</Typography>
       <Typography> Grandpas Rate: {game.combinedGrandpaRates} 🍩/sec</Typography>
       <Typography> Farms Rate: {game.combinedFarmRates} 🍩/sec</Typography>
       <Typography> Rigs Rate: {game.combinedRigRates} 🍩/sec</Typography>
       <Typography> Banks Rate: {game.combinedBankRates} 🍩/sec</Typography>
       <Typography> Church Rate: {game.combinedChurchRates} 🍩/sec</Typography>
       <Typography> Bezos Rate: {game.combinedBezoRate} 🍩/sec</Typography>
       <Typography> Buildings Owned: {game.totalOfAllBuildings}</Typography>  
        
    </Box>
  );
}

export default Stats;
