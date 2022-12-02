import React from 'react';
import { Box, Stack, Divider, Typography, Button } from '@mui/material';
import { height } from '@mui/system';

const StoreButton = (type, cost, total, isDisabled, canBuy) => {
  return (
    <Box
      sx={{
        bgcolor: '#9F998D',
        boxShadow: 1,
        border: '5px outset #87826E',
        p: 2,
        width: '250px',
        height: '25px',
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
        <Typography>image</Typography>
        <Stack direction='column'>
          <Typography variant='h5' color={'#fff'}>
            House
          </Typography>
          <Typography variant='p' color={'#66FF65'}>
            50
          </Typography>
        </Stack>
        <Typography variant='h5' color={'#58564C'}>
          10
        </Typography>
      </Stack>
    </Box>
  );
};

const StoreButtonGroup = () => {
  return (
    <Stack direction='column'>
      <StoreButton />
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
