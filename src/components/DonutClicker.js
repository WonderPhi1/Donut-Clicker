import React from 'react';
import { Box, Stack, Divider } from '@mui/material';
// Components
import Display from './Display';
import Store from './Store';

const DonutClicker = () => {
  return (
    <Stack
      direction={'row'}
      spacing={2}
      divider={<Divider orientation='vertical' flexItem />}
    >
      <Display />
      <Store />
    </Stack>
  );
};

export default DonutClicker;
