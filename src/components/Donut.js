import { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import donutImage from '../assets/donutImage.png';

export class Cook {
  name;
  cost = 1000;
  donutRate = 5;

  constructor() {
    this.name = 'Cook';
  }
}

export default function Donut() {
  const [donuts, setDonuts] = useState(0);
  const [totalRate, setTotalRate] = useState(0);
  const [buildings, setBuildings] = useState([]);

  // console.log(buildings);
  console.log(totalRate);

  useEffect(() => {
    const id = setInterval(
      () => setDonuts((donuts) => donuts + totalRate),
      1000,
    );

    return () => {
      clearInterval(id);
    };
  }, [totalRate]);

  // use effect for when a new building is added
  useEffect(() => {
    if (buildings.length > 0) {
      const newestBuild = buildings[buildings.length - 1];
      setDonuts((oldDonuts) => oldDonuts - newestBuild.cost);
    }

    const totalRateArray = buildings.map((building) => building.donutRate);
    let rateIncrease = 0;

    for (let rate in totalRateArray) {
      rateIncrease = totalRateArray[rate];
    }
    setTotalRate((oldRate) => oldRate + rateIncrease);
  }, [buildings]);

  return (
    <>
      <Typography variant='h1'>{donuts}</Typography>
      <Box
        component='img'
        sx={{
          width: 200,
          height: 200,
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
        src={donutImage}
        onClick={() => setDonuts((prevState) => prevState + 1)}
      ></Box>
      <Button
        disabled={donuts < new Cook().cost}
        variant='contained'
        onClick={() =>
          setBuildings((oldBuildings) => [...oldBuildings, new Cook()])
        }
      >
        Add Building
      </Button>
      <Button variant='contained' onClick={() => setDonuts(0)}>
        Reset
      </Button>
      <Button
        variant='contained'
        onClick={() => {
          setTotalRate(0);
          setBuildings([]);
        }}
      >
        Reset Buildings
      </Button>
    </>
  );
}
