import React, { useState, useEffect } from 'react';
import { Stack, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// Components
import Display from './Display';
import Stats from './Stats';
import Store from './Store';

const DonutClicker = () => {
  const theme = useTheme();
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
      <Display />
      <Stats />
      <Store />
    </Stack>
  );
};

export default DonutClicker;
