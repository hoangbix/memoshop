import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link as MuiLink, Toolbar } from '@mui/material';
import Link from 'next/link';
import { HeaderInfo } from './HeaderInfo';

import LogoIcon from 'src/images/icons/logo.svg';
import { HeaderSearch } from './HeaderSearch';
import { HeaderAction } from './HeaderAction';
import { MouseEvent, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { HeaderMenu } from './menu/HeaderMenu';

const HeadertWrapper = styled(Box)<BoxProps>(() => ({
  width: '100%',
  color: '#fff',
  borderBottom: '1px solid #cccccc90',
}));

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
      <Box sx={{ padding: { sx: '20px 0', md: '30px 0' }, borderBottom: '1px solid #cccccc80' }}>
        <Toolbar disableGutters>
          <Container
            maxWidth={'xxl'}
            sx={{ height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '30px' }}
          >
            <Box sx={{ display: { xs: 'block', lg: 'none' }, justifyContent: 'center' }}>
              <Link href={'/'}>
                <AiOutlineMenu fontSize={'30px'} />
              </Link>
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
    </>
  );
};

export default Header;
