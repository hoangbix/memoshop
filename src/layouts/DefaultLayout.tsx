import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Header from 'src/components/header';
import ScrollToTop from 'src/components/ScrollToTop';
import Fab from '@mui/material/Fab';

import { AiOutlineArrowUp } from 'react-icons/ai';

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Header />
      <Box>{children}</Box>
      <ScrollToTop className="mui-fixed">
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <AiOutlineArrowUp fontSize={'26px'} />
        </Fab>
      </ScrollToTop>
    </Box>
  );
};

export default DefaultLayout;
