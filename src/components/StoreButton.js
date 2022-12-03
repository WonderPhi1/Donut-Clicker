import React from 'react';
import { Box, Stack, Divider, Typography, Button } from '@mui/material';
import ToeImage from '../assets/toe.png';

const StoreButton = ({ building, cost, total, isDisabled, canBuy }) => {
  return (
    <Box
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
        <Box component={'img'} width='60px' height='60px' src={ToeImage} />
        <Stack direction='column'>
          <Typography variant='h5' color={'#fff'}>
            {building}
          </Typography>
          <Typography variant='p' color={'#66FF65'}>
            50
          </Typography>
        </Stack>
        <Typography variant='h4' color={'#58564C'}>
          10
        </Typography>
      </Stack>
    </Box>
  );
};

const StoreButtonGroup = ({ type }) => {
  return (
    <Stack direction='column'>
      <StoreButton building='Toe' />
      <StoreButton />
      <StoreButton />
      <StoreButton />
      <StoreButton />
      <StoreButton />
      <StoreButton />
      <StoreButton />
      <StoreButton />
    </Stack>
  );
};

export default StoreButtonGroup;
