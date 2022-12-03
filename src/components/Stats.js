import { Box } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';

function Stats() {
  const theme = useTheme();
  return (
    <Box
      width='30%'
      sx={{
        color: '#fff',
        bgcolor: '#000',
        borderRight: `10px groove ${theme.palette.primary.main}`,
      }}
    >
      Stats
    </Box>
  );
}

export default Stats;
