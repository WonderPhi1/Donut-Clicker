import React, { useState, useEffect } from 'react';
import { Stack, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// Classes
import Donut from '../classes/Donut';
import BuildingManager from '../classes/BuildingManager';
// Components
import Display from './Display';
import Stats from './Stats';
import Store from './Store';

const DonutClicker = () => {
  // hooks
  const theme = useTheme();
  // state
  const [donuts, setDonuts] = useState(0);
  // classes
  const game = new BuildingManager(new Donut(donuts, setDonuts));

  return (
    <Stack
      direction={'row'}
      justifyContent='space-between'
      spacing={0}
      sx={{
        flex: 1,
        height: '100%',
      }}
    >
      <Display game={game} />
      <Stats />
      <Store game={game} />
    </Stack>
  );
};

export default DonutClicker;
