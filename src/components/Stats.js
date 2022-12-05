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
      Stats
      <Typography>Total Toes: {game.totalToes}</Typography>
      <Typography>Total Interns: {game.totalIntern}</Typography>
      <Typography>Total Cooks: {game.totalCooks}</Typography>
      <Typography>Total Grandpas: {game.totalGranpas}</Typography>
      <Typography>Total Farms: {game.totalFarms}</Typography>
      <Typography>Total Rigs: {game.totalRigs}</Typography>
      <Typography>Total Banks: {game.totalBanks}</Typography>
      <Typography>Total Church: {game.totalChurches}</Typography>
      <Typography>Total Bezos: {game.totalBezos}</Typography>
      <Typography>Total Buildings: {game.totalOfAllBuildings}</Typography> 
    </Box>
  );
}

export default Stats;
