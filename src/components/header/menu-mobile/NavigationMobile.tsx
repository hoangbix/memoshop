import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { BodyNav } from './BodyNav';
import { HeaderNav } from './HeaderNav';
import LocationMenu from './LocationMenu';

const NavigationMobile = ({ handleDrawerToggle }: { handleDrawerToggle: () => void }) => {
  return (
    <Box sx={{ overflowY: 'auto' }}>
      <HeaderNav handleDrawerToggle={handleDrawerToggle} />
      <BodyNav handleDrawerToggle={handleDrawerToggle} />
      <LocationMenu />
      <Box sx={{ mt: '30px', display: 'flex', justifyContent: 'center' }}>
        <Typography textAlign={'center'}>
          © 2022, <span style={{ color: '#3BB77E', fontWeight: 600 }}>MemoShop</span> - Đã đăng ký bản quyền <br />
          Thiết kế bởi{' '}
          <Link target={'_blank'} href="https://www.facebook.com/hoangbix">
            HoangBily
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default NavigationMobile;
