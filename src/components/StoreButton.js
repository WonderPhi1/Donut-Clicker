import React, { useState } from 'react';
import {
  Box,
  Stack,
  Divider,
  Typography,
  Button,
  Tooltip,
} from '@mui/material';
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

/**
 * This function displays the buy section of the store which includes purchaing a building.
 * @param {string} building - Upgrade
 * @param {boolean} isDisabled - Inefficient donuts
 * @param {img} icon - Image of the upgrades
 * @param {string} type - To buy/sell buildings
 * @param {event} onClick - When the user clicks on the buttons
 * @param {number} baseBuilding - Increases the donut per second based on how much donuts the building produces
 * @param {number} buildingTotal - Shows the total of each building purchased
 * @returns The total amount of buildings purchased, shows red if the user does not have enough 
 * donuts and green if they do have enough, shows the image of each building, and increases the donut per second. 
 */
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
      <Tooltip
        title={`Each ${building} produces ${baseBuilding.donutRate} donuts per second.`}
        placement='left'
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
      </Tooltip>
    </Box>
  );
};

/**
 * This function displays the sell section of the store which includes selling each building to get donuts back.
 * @param {string} type - to buy/sell buildings
 * @param {object} game - Game screen
 * @returns The total amount of buildings the user has left, shows red if the user cannot sell anymore
 * and green if there are buildings, and shows the image of each building.
 */
const StoreButtonGroup = ({ type, game }) => {
  /**
   * This function is to for when the user wants to sell a building 
   * the value of the total buildings will go down by 1 each time the user clicks on it.
   * @param {*} base 
   * @param {string} building - Upgrade
   * @param {type} instanceType 
   * @param {string} buildingType - Name of building
   */
  const buildingHandler = (base, building, instanceType, buildingType) => {
    if (type === 'buy') {
      game.addBuilding(building, instanceType, buildingType);
      game.donutGame.donuts = -base.buildingCost;
      base.increaseBuildingCost();
      //base.calcCombinedBuildingRate()
    }

    if (type === 'sell') {
      switch (buildingType) {
        case 'Toe':
          game.totalToes = -1;
          game.combinedToesRates = -new Toe().donutRate;
          break;
        case 'Unpaid Intern':
          game.totalIntern = -1;
          game.combinedInternRates = -new UnpaidIntern().donutRate;
          break;
        case 'Cook':
          game.totalCooks = -1;
          game.combinedCookRates = -new Cook().donutRate;
          break;
        case 'Grandpa':
          game.totalGrandpas = -1;
          game.combinedGrandpaRates = -new Grandpa().donutRate;
          break;
        case 'Farm':
          game.totalFarms = -1;
          game.combinedFarmRates = -new Farm().donutRate;
          break;
        case 'Rig':
          game.totalRigs = -1;
          game.combinedRigRates = -new Rig().donutRate;
          break;
        case 'Bank':
          game.totalBanks = -1;
          game.combinedBankRates = -new Bank().donutRate;
          break;
        case 'Church':
          game.totalChurches = -1;
          game.combinedChurchRates = -new Church().donutRate;
          break;
        case 'Beezos':
          game.totalBezos = -1;
          game.combinedBezoRate = -new Bezos().donutRate;
          break;
        default:
        // do nothing
      }

      game.totalOfAllBuildings = -1;
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
        }}
      />
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
        }}
      />
      <StoreButton
        building='Rig'
        icon={RigImage}
        type={type}
        baseBuilding={game.gameState.baseBuildings.rig}
        buildingTotal={game.totalRigs}
        isDisabled={
          (game.donutGame.donuts <
            game.gameState.baseBuildings.rig.buildingCost &&
            type !== 'sell') ||
          (type === 'sell' && game.totalRigs === 0)
            ? true
            : false
        }
        onClick={() => {
          buildingHandler(
            game.gameState.baseBuildings.rig,
            new Rig(),
            Rig,
            'Rig',
          );
        }}
      />
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
        }}
      />
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
        }}
      />

      <StoreButton
        building='Beezos'
        icon={BeezosImage}
        type={type}
        baseBuilding={game.gameState.baseBuildings.beezos}
        buildingTotal={game.totalBezos}
        isDisabled={
          (game.donutGame.donuts <
            game.gameState.baseBuildings.beezos.buildingCost &&
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
        }}
      />
    </Stack>
  );
};

export default StoreButtonGroup;
