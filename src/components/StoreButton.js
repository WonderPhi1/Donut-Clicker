import React, { useState } from 'react';
import { Box, Stack, Divider, Typography, Button } from '@mui/material';
import ToeImage from '../assets/toe.png';
import InternImage from '../assets/intern.png';
import CookImage from '../assets/cook.png';
import GrandpaImage from '../assets/grandpa.png';
import FarmImage from '../assets/farm.png';
import BankImage from '../assets/bank.png';
import ChurchImage from '../assets/church.png';
import RigImage from '../assets/rig.png';
import BeezosImage from '../assets/beezos.png';
import { Toe, UnpaidIntern } from '../classes/Buildings';

const StoreButton = ({
  building,
  cost,
  total,
  isDisabled,
  canBuy,
  icon,
  type,
  onClick,
  baseBuilding,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        bgcolor: '#9F998D',
        boxShadow: 1,
        border: '5px outset #87826E',
        p: 2,
        width: '100%',
        height: '90px',
        '&:hover': {
          backgroundColor: '#d9d6d1',
          opacity: [0.9, 0.8, 0.7],
          cursor: 'pointer',
        },
        '&:active': {
          transform: 'scale(0.95)',
        },
      }}
    >
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Box component={'img'} width='60px' height='60px' src={icon} />
        <Stack
          width={'100%'}
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <Stack direction='column'>
            <Typography variant='h5' color={'#fff'}>
              {building}
            </Typography>
            <Typography variant='p' color={type === 'buy' ? '#66FF65' : 'red'}>
              {baseBuilding.buildingCost}
            </Typography>
          </Stack>
          <Typography variant='h4' color={'#58564C'}>
            {10}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

const StoreButtonGroup = ({ type, game }) => {
  const [baseToe] = useState(new Toe());
  const [baseIntern] = useState(new UnpaidIntern());

  const newBuildingHandler = (base, building) => {
    game.addBuilding(building);
    base.increaseBuildingCost();
    //game.calcTotalToes();
    //game.calcTotalRate();
    
  };

  return (
    <Stack direction='column'>
      <StoreButton
        building='Toe'
        icon={ToeImage}
        type={type}
        baseBuilding={baseToe}
        onClick={() => {
          newBuildingHandler(baseToe, new Toe());
          
          
        }}
      />
      <StoreButton 
        building='Unpaid Intern' 
        icon={InternImage} 
        type={type} 
        baseBuilding={baseIntern}
        onClick={() => {
          newBuildingHandler(baseIntern, new UnpaidIntern());
          
         
         
          
        }} />
      {/* <StoreButton building='Cook' icon={CookImage} type={type} />
      <StoreButton building='Grandpa' icon={GrandpaImage} type={type} />
      <StoreButton building='Farm' icon={FarmImage} type={type} />
      <StoreButton building='Bank' icon={BankImage} type={type} />
      <StoreButton building='Church' icon={ChurchImage} type={type} />
      <StoreButton building='Rig' icon={RigImage} type={type} />
      <StoreButton building='Beezos' icon={BeezosImage} type={type} /> */}
    </Stack>
  );
};

export default StoreButtonGroup;
