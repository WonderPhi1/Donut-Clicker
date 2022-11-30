import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import donutImage from '../assets/donutImage.png';

export class DonutValues {
  constructor(storeName,cost,donutRate) {
    this.storeName = storeName;
    this.cost = cost;
    this.donutRate = donutRate;
  }

};
 class Cook extends DonutValues{
  constructor(storeName,cost,donutRate) {
    super(storeName,cost,donutRate)
      this.StoreName = 'Cook';
      this.cost = 10
      this.donutRate = 1
  }
};

  class Baker extends DonutValues{
    constructor(storeName,cost,donutRate) {
      super(storeName,cost,donutRate)
        this.StoreName = 'Baker';
        this.cost = 15
        this.donutRate = 5
  }
 }


export default function Donut() {
  const [donuts, setDonuts] = useState(0);
  const [totalRate, setTotalRate] = useState(0);
  const [buildings, setBuildings] = useState([]);
  const [cookCount, setCookCount] = useState(0);
  const [bakerCount, setBakerCount] = useState(0);
  const [lifetimeDonuts, setLifetimeDonuts] = useState(0); 
  const [donutsSpent, setDonutsSpent] = useState(0);
  
   
  // console.log(buildings);
  console.log(totalRate);

  useEffect(() => {
    const id = setInterval(
      () => {setDonuts((donuts) => donuts + totalRate);}, 
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

    // calculate total rate
    const totalRateArray = buildings.map((building) => building.donutRate);
    let rateIncrease = 0;

    for (let rate in totalRateArray) {
      rateIncrease = totalRateArray[rate];
    }
    setTotalRate((oldRate) => oldRate + rateIncrease);

    //Calculate how much donuts you have spent
    const totalCostArray = buildings.map((building) => building.cost);
    let costIncrease = 0;
    for(let cost in totalCostArray){
      costIncrease =totalCostArray[cost]
    }
    setDonutsSpent((oldSpent) => oldSpent + costIncrease);

    


    
  }, [buildings]);

  //resets all values to 0 
  function resetAll(){
    setDonuts(0);
    setTotalRate(0);
    setBuildings([]);
    setCookCount(0);
    setBakerCount(0);
    setDonutsSpent(0);
    setLifetimeDonuts(0);

  }

  
  

  return (
    <>
      <Typography variant='h1' id="dcount">{donuts}</Typography>
      <Typography variant='p1'>Donuts {totalRate} /sec</Typography><br />
      <Typography variant='p1'>Cooks hired: {cookCount} </Typography><br />
      <Typography variant='p1'>Bakers hired: {bakerCount} </Typography><br />
      <Typography variant='p1' id="dspent">Lifetime donuts spent: {donutsSpent} </Typography><br />
      {/* <Typography variant='p1'>Lifetime donuts earned: {lifetimeDonuts} </Typography><br /> */}

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
      <Box
        m={1}
        //margin
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-end"
      >

      <Button
        id ="Cook"
        disabled={donuts < new Cook().cost}
        variant='contained'
        onClick={() =>
          {setCookCount((prevState) => prevState + 1); setBuildings((oldBuildings) => [...oldBuildings, new Cook()])}
        }
      >
        Cook <br /> Cost = 10 <br />Donuts = 1/sec

      </Button>
      
       <Button
        disabled={donuts < new Baker().cost}
        variant='contained'
        onClick={() =>
          {setBakerCount((prevState) => prevState + 1);setBuildings((oldBuildings) => [...oldBuildings, new Baker()] )}
          
        }
      >
        Baker <br />Cost = 15 <br />Donuts = 5/sec
      </Button> 
      <Button variant='contained' onClick={() => resetAll()}>
        Reset
      </Button>
      </Box>
    </>
  );
}
