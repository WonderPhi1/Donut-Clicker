import React from 'react';
import { Tab, Box, Typography, Stack } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import StoreButtonGroup from './StoreButton';

const Store = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack direction='column' alignItems={'center'}>
      <Typography variant='h3'>Store</Typography>
      <Box sx={{ width: '500px', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label='lab API tabs example'>
              <Tab label='Buy' value='1' />
              <Tab label='Sell' value='2' />
              <Tab label='1' value='3' />
              <Tab label='10' value='4' />
            </TabList>
          </Box>
          <TabPanel value='1'>
            <StoreButtonGroup />
          </TabPanel>
          <TabPanel value='2'>Item Two</TabPanel>
          <TabPanel value='3'>Item Three</TabPanel>
          <TabPanel value='4'>Item Three</TabPanel>
        </TabContext>
      </Box>
    </Stack>
  );
};

export default Store;
