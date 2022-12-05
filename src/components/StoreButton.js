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
import {
  Bank,
  Church,
  Bezos,
  Cook,
  Farm,
  Grandpa,
  Rig,
  Toe,
  UnpaidIntern,
} from '../classes/Buildings';

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
      switch (buildingType) {
        case 'Toe':
          game.totalToes = -1;
          break;
        case 'Unpaid Intern':
          game.totalIntern = -1;
          break;
        case 'Cook':
          game.totalCooks = -1;
          break;
        case 'Grandpa':
          game.totalGrandpas = -1;
          break;
        case 'Farm':
          game.totalFarms = -1;
          break;
        case 'Rig':
          game.totalRigs = -1;
          break;
        case 'Bank':
          game.totalBanks = -1;
          break;
        case 'Church':
          game.totalChurches = -1;
          break;
        case 'Beezos':
          game.totalBezos = -1;
          break;
        default:
        // do nothing
      }
      game.totalOfAllBuildings =-1 
      game.totalRate = -base.donutRate;
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
      <StoreButton
        building='Cook'
        icon={CookImage}
        type={type}
        baseBuilding={game.gameState.baseBuildings.cook}
        buildingTotal={game.totalCooks}
        isDisabled={
          (game.donutGame.donuts <
            game.gameState.baseBuildings.cook.buildingCost &&
            type !== 'sell') ||
          (type === 'sell' && game.totalCooks === 0)
            ? true
            : false
        }
        onClick={() => {
          
          buildingHandler(
            game.gameState.baseBuildings.cook,
            new Cook(),
            Cook,
            'Cook',
          );
        }}
      />
       <StoreButton 
       building='Grandpa' 
       icon={GrandpaImage} 
       type={type}
       baseBuilding={game.gameState.baseBuildings.grandpa}
        buildingTotal={game.totalGrandpas}
        isDisabled={
          (game.donutGame.donuts <
            game.gameState.baseBuildings.grandpa.buildingCost &&
            type !== 'sell') ||
          (type === 'sell' && game.totalGrandpas === 0)
            ? true
            : false
        }
        onClick={() => {
          
          buildingHandler(
            game.gameState.baseBuildings.grandpa,
            new Grandpa(),
            Grandpa,
            'Grandpa',
          );
        }} />
      <StoreButton 
      building='Farm' 
      icon={FarmImage} 
      type={type}
      baseBuilding={game.gameState.baseBuildings.farm}
        buildingTotal={game.totalFarms}
        isDisabled={
          (game.donutGame.donuts <
            game.gameState.baseBuildings.farm.buildingCost &&
            type !== 'sell') ||
          (type === 'sell' && game.totalFarms === 0)
            ? true
            : false
        }
        onClick={() => {
          
          buildingHandler(
            game.gameState.baseBuildings.farm,
            new Farm(),
            Farm,
            'Farm',
          );
        }} />
      <StoreButton 
      building='Bank' 
      icon={BankImage} 
      type={type}
      baseBuilding={game.gameState.baseBuildings.bank}
        buildingTotal={game.totalBanks}
        isDisabled={
          (game.donutGame.donuts <
            game.gameState.baseBuildings.bank.buildingCost &&
            type !== 'sell') ||
          (type === 'sell' && game.totalBanks === 0)
            ? true
            : false
        }
        onClick={() => {
          
          buildingHandler(
            game.gameState.baseBuildings.bank,
            new Bank(),
            Bank,
            'Bank',
          );
        }} />
      <StoreButton 
      building='Church' 
      icon={ChurchImage} 
      type={type}
      baseBuilding={game.gameState.baseBuildings.church}
        buildingTotal={game.totalChurches}
        isDisabled={
          (game.donutGame.donuts <
            game.gameState.baseBuildings.church.buildingCost &&
            type !== 'sell') ||
          (type === 'sell' && game.totalChurches === 0)
            ? true
            : false
        }
        onClick={() => {
          
          buildingHandler(
            game.gameState.baseBuildings.church,
            new Church(),
            Church,
            'Church',
          );
        }} />
      <StoreButton 
      building='Rig' 
      icon={RigImage} 
      type={type}
      baseBuilding={game.gameState.baseBuildings.rig}
        buildingTotal={game.totalRigs}
        isDisabled={
          (game.donutGame.donuts <
            game.gameState.baseBuildings.rig.totalRigs &&
            type !== 'sell') ||
          (type === 'sell' && game.totalRigs === 0)
            ? true
            : false
        }
        onClick={() => {
          
          buildingHandler(
            game.gameState.baseBuildings.rigs,
            new Rig(),
            Rig,
            'Rig',
          );
        }} />
      <StoreButton 
      building='Beezos' 
      icon={BeezosImage} 
      type={type}
      baseBuilding={game.gameState.baseBuildings.beezos}
        buildingTotal={game.totalBezos}
        isDisabled={
          (game.donutGame.donuts <
            game.gameState.baseBuildings.rig.totalBezos &&
            type !== 'sell') ||
          (type === 'sell' && game.totalBezos === 0)
            ? true
            : false
        }
        onClick={() => {
          
          buildingHandler(
            game.gameState.baseBuildings.beezos,
            new Bezos(),
            Bezos,
            'Beezos',
          );
        }} /> 
    </Stack>
  );
};

export default StoreButtonGroup;
