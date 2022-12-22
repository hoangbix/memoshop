import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Drawer, IconButton, Link as MuiLink, Toolbar, useScrollTrigger } from '@mui/material';
import Link from 'next/link';
import { HeaderInfo } from './HeaderInfo';

import LogoIcon from 'src/images/icons/logo.svg';
import { HeaderSearch } from './HeaderSearch';
import { HeaderAction } from './HeaderAction';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { HeaderMenu } from './menu/HeaderMenu';
import NavigationMobile from './menu-mobile/NavigationMobile';

const HeadertWrapper = styled(Box)<BoxProps>(() => ({
  width: '100%',
  color: '#fff',
  borderBottom: '1px solid #cccccc90',
}));

interface Props {
  window?: () => Window;
}
const drawerWidth = '60%';

const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const trigger = useScrollTrigger({
    threshold: 150,
    disableHysteresis: true,
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Typography
        sx={{
          display: { xs: 'none', sm: 'block', md: 'none' },
          height: '30px',
          lineHeight: '30px',
          textAlign: 'center',
          background: '#DEF9EC',
          fontSize: '14px',
        }}
      >
        Nhập mã <span style={{ color: '#3BB77E', fontWeight: 700 }}>FREESHIP</span> để được miễn phí giao hàng
      </Typography>
      <HeadertWrapper sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Container maxWidth={'xxl'} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <HeaderInfo />
          <Typography sx={{ fontSize: '14px', display: { xs: 'none', xl: 'block' } }}>
            Nhập mã <span style={{ color: '#3BB77E', fontWeight: 700 }}>FREESHIP</span> để được miễn phí giao hàng
          </Typography>
          <Typography sx={{ fontSize: '14px' }}>
            Bạn cần giúp đỡ?{' '}
            <MuiLink href="tel:0938 334 536" sx={{ fontWeight: 600, color: '#3BB77E !important' }}>
              Gọi ngay: 0938 334 526
            </MuiLink>
          </Typography>
        </Container>
      </HeadertWrapper>
      <Box
        sx={{
          padding: { sx: 0, md: '10px 0' },
          borderBottom: '1px solid #cccccc80',
        }}
        className={trigger ? 'sticky-bar' : ''}
      >
        <Toolbar disableGutters>
          <Container
            maxWidth={'xxl'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '30px',
            }}
          >
            <Box sx={{ display: { xs: 'block', lg: 'none' }, justifyContent: 'center' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { lg: 'none' } }}
              >
                <AiOutlineMenu fontSize={'30px'} />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <Link href={'/'}>
                <LogoIcon />
              </Link>
            </Box>
            <HeaderSearch />
            <HeaderAction />
          </Container>
        </Toolbar>
      </Box>
      <HeaderMenu />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '100%', md: drawerWidth } },
          }}
        >
          <NavigationMobile handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
