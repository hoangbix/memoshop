import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Header from 'src/components/header';

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
};

export default DefaultLayout;
