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
 * In this function we are stating that when the game is launched, all the values for donuts and the upgrades are set to 0.
 */
const state = {
  donutInfo: {
    donuts: 0,
    rate: 0,
    donutsClicked: 0,
  },
  toeInfo: {
    totalToes: 0,
    combinedToesRates: 0,
  },
  internInfo: {
    totalInterns: 0,
    combinedInternRates: 0,
  },
  cookInfo: {
    totalCooks: 0,
    combinedCookRates: 0,
  },
  grandpaInfo: {
    totalGrandpas: 0,
    combinedGrandpaRates: 0,
  },
  farmInfo: {
    totalFarms: 0,
    combinedFarmRates: 0,
  },
  rigInfo: {
    totalRigs: 0,
    combinedRigRates: 0,
  },
  bankInfo: {
    totalBanks: 0,
    combinedBankRates: 0,
  },
  churchInfo: {
    totalChurches: 0,
    combinedChurchRates: 0,
  },
  bezosInfo: {
    totalBezos: 0,
    combinedBezoRate: 0,
  },
  totalBuildingInfo: {
    totalOfAllBuildings: 0,
  },

  baseBuildings: {
    toe: new Toe(),
    unpaidIntern: new UnpaidIntern(),
    cook: new Cook(),
    grandpa: new Grandpa(),
    farm: new Farm(),
    rig: new Rig(),
    bank: new Bank(),
    church: new Church(),
    beezos: new Bezos(),
  },
};

/**
 * This function will display the game.
 * @returns The game screen with everything on it.
 */
const DonutClicker = () => {
  // state
  const [gameState, setGameState] = useState(state);
  // classes
  const game = new BuildingManager(
    new Donut(gameState.donutInfo.donuts, setGameState),
    gameState,
    setGameState,
  );

  // Updates the total donuts every second the total rate
  useEffect(() => {
    const timer = setInterval(
      () => (game.donutGame.donuts = game.totalRate),
      1000,
    );

    return () => {
      clearInterval(timer);
    };
  }, [game]);

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
      <Stats game={game} />
      <Store game={game} />
    </Stack>
  );
};

export default DonutClicker;
