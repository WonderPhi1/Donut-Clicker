import React, { useState, useEffect } from 'react';
import { Box, Stack, Divider, Typography, Button } from '@mui/material';
import donutImage from '../assets/donutImage.png';
// Components
import Display from './Display';
import Store from './Store';

export class Baker {
  name;
  cost = 20;
  donutRate = 5;

  constructor() {
    this.name = 'Baker';
  }
}
export class Farm {
  name;
  cost = 40;
  donutRate = 20;

  constructor() {
    this.name = 'Farm';
  }
}

const DonutClicker = () => {
  const [donuts, setDonuts] = useState(0);
  const [totalRate, setTotalRate] = useState(0);

  // Buildings
  const [bakers, setBakers] = useState([]);
  const [farms, setFarms] = useState([]);

  // Updates the total donuts every second the total rate
  useEffect(() => {
    const timer = setInterval(
      () => setDonuts((donuts) => donuts + totalRate),
      1000,
    );

    return () => {
      clearInterval(timer);
    };
  }, [totalRate]);

  // Updates total rate when baker is added
  useEffect(() => {
    calcaulateTotalRate(bakers);
  }, [bakers]);

  // Sets the new total rate based on the new added building
  const calcaulateTotalRate = (buildings) => {
    if (buildings.length > 0) {
      const newBuilding = buildings[buildings.length - 1];
      setDonuts((oldDonuts) => oldDonuts - newBuilding.cost);

      setTotalRate((oldRate) => oldRate + newBuilding.donutRate);
    } else {
      return 0;
    }
  };

  return (
    <Stack direction={'row'}>
      <Stack direction='column'>
        <Typography variant='h1'>{donuts}</Typography>
        <Typography variant='h6'>Donuts per second {totalRate}</Typography>
        <Box
          component='img'
          sx={{
            width: 400,
            height: 400,
            animation: 'spin 15s linear infinite',
            '&:hover': {
              cursor: 'pointer',
              transform: 'scale(2)',
            },
            '&:active': {},
            '@keyframes spin': {
              '0%': {
                transform: 'rotate(360deg)',
              },
              '100%': {
                transform: 'rotate(0deg)',
              },
            },
          }}
          src={donutImage}
          onClick={() => setDonuts((prevState) => prevState + 1)}
        />
      </Stack>
      {/* <Button
        variant='contained'
        onClick={() => setBakers((oldBakers) => [...oldBakers, new Baker()])}
        disabled={donuts < new Baker().cost}
      >
        Add Baker
      </Button>
      <Button
        variant='contained'
        onClick={() => setBakers((oldBakers) => [...oldBakers, new Baker()])}
        disabled={donuts < new Baker().cost}
      >
        Add Baker
      </Button> */}
      <Store />
    </Stack>
  );
};

export default DonutClicker;
