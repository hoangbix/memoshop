import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Header from 'src/components/header';
import ScrollToTop from 'src/components/ScrollToTop';
import Fab from '@mui/material/Fab';

import { AiOutlineArrowUp } from 'react-icons/ai';
import Footer from 'src/components/Footer';
import { Container } from '@mui/material';

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Header />
      <Container maxWidth={'xxl'}>{children}</Container>
      <Footer />

      {/**Scroll to Top */}
      <ScrollToTop className="mui-fixed">
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <AiOutlineArrowUp fontSize={'26px'} />
        </Fab>
      </ScrollToTop>
    </Box>
  );
};

export default DefaultLayout;
