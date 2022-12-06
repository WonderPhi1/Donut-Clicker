import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

/**
 * This function is to display the stats of the user which includes how many donuts they will be getting based on
 * the building that they have purchased, and also how many buildings they have in total.
 * @param {object} game - Game screen
 * @returns The stats of the user
 */
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
      ********Welcome to Donut Clicker{<br />} ********Click the donut to earn
      donuts{<br />}
      ********Buy buildings when you can afford them {<br />} ********Earn more
      buy more
      <Typography> Toe Rate: {game.combinedToesRates} 🍩/sec </Typography>
      <Typography> Interns Rate: {game.combinedInternRates} 🍩/sec</Typography>
      <Typography> Cooks Rate: {game.combinedCookRates} 🍩/sec</Typography>
      <Typography>
        {' '}
        Grandpas Rate: {game.combinedGrandpaRates} 🍩/sec
      </Typography>
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
