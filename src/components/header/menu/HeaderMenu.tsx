import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { DropdownMenu } from './DropdownMenu';
import { HotlineMenu } from './HotlineMenu';
import { MainMenu } from './MainMenu';

export const HeaderMenu = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '71px',
        borderBottom: '1px solid #cccccc80',
        alignItems: 'center',
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <Container maxWidth={'xl'} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <DropdownMenu />
        <MainMenu />
        <HotlineMenu />
      </Container>
    </Box>
  );
};
