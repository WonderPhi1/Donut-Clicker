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
  isDisabled,
  icon,
  type,
  onClick,
  baseBuilding,
  buildingTotal,
}) => {
  return (
    <Box
      onClick={!isDisabled ? onClick : null}
      sx={{
        bgcolor: !isDisabled ? '#9F998D' : '#5F6461',
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
            <Typography
              variant='subtitle1'
              color={!isDisabled ? '#fff' : '#A1ABB4'}
            >
              {building}
            </Typography>
            <Typography
              variant='subtitle2'
              color={type === 'buy' && !isDisabled ? '#66FF65' : '#A4545B'}
            >
              {baseBuilding.buildingCost}
            </Typography>
          </Stack>
          <Typography variant='h4' color={'#58564C'}>
            {buildingTotal}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

const StoreButtonGroup = ({ type, game }) => {
  const buildingHandler = (base, building, instanceType, buildingType) => {
    if (type === 'buy') {
      game.addBuilding(building, instanceType, buildingType);
      game.donutGame.donuts = -base.buildingCost;
      base.increaseBuildingCost();
    }

    if (type === 'sell') {
      if (buildingType == 'Toe') {
        game.totalToes = -1;
      } else if (buildingType == 'Unpaid Intern') {
        game.totalIntern = -1;
      }

      game.donutGame.donuts = base.buildingCost;
      base.decreaseBuildingCost();
    }
  };

  return (
    <Stack direction='column'>
      <StoreButton
        building='Toe'
        icon={ToeImage}
        type={type}
        baseBuilding={game.gameState.baseBuildings.toe}
        buildingTotal={game.totalToes}
        isDisabled={
          (game.donutGame.donuts <
            game.gameState.baseBuildings.toe.buildingCost &&
            type !== 'sell') ||
          (type === 'sell' && game.totalToes === 0)
            ? true
            : false
        }
        onClick={() => {
          buildingHandler(
            game.gameState.baseBuildings.toe,
            new Toe(),
            Toe,
            'Toe',
          );
        }}
      />
      <StoreButton
        building='Unpaid Intern'
        icon={InternImage}
        type={type}
        baseBuilding={game.gameState.baseBuildings.unpaidIntern}
        buildingTotal={game.totalIntern}
        isDisabled={
          (game.donutGame.donuts <
            game.gameState.baseBuildings.unpaidIntern.buildingCost &&
            type !== 'sell') ||
          (type === 'sell' && game.totalIntern === 0)
            ? true
            : false
        }
        onClick={() => {
          buildingHandler(
            game.gameState.baseBuildings.unpaidIntern,
            new UnpaidIntern(),
            UnpaidIntern,
            'Unpaid Intern',
          );
        }}
      />
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
