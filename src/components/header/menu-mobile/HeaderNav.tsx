import { Box, Divider, IconButton } from '@mui/material';

import LogoIcon from 'src/images/icons/logo.svg';
import { AiOutlineClose } from 'react-icons/ai';

export const HeaderNav = ({ handleDrawerToggle }: { handleDrawerToggle: () => void }) => {
  return (
    <>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px 13px 30px' }}
      >
        <LogoIcon width={'150px'} />
        <IconButton sx={{ backgroundColor: '#DEF9EC', width: '30px', height: '30px' }} onClick={handleDrawerToggle}>
          <AiOutlineClose color={'#000'} />
        </IconButton>
      </Box>
      <Divider />
    </>
  );
};
