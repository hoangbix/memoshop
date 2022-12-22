import { Box } from '@mui/material';
import React from 'react';
import { BodyNav } from './BodyNav';
import { HeaderNav } from './HeaderNav';

const NavigationMobile = ({ handleDrawerToggle }: { handleDrawerToggle: () => void }) => {
  return (
    <Box>
      <HeaderNav handleDrawerToggle={handleDrawerToggle} />
      <BodyNav handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
};

export default NavigationMobile;
