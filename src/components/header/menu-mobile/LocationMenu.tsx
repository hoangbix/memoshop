import { Box, Typography } from '@mui/material';

import LocationIcon from 'src/images/icons/icon-location.svg';
import ContactIcon from 'src/images/icons/icon-contact.svg';
import UserIcon from 'src/images/icons/icon-email-2.svg';

const LocationMenu = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          width: 320,
          maxWidth: '100%',
          padding: '20px',
          borderRadius: '5px',
          border: '1px solid #ececec',
        }}
      >
        <Typography fontSize={'15px'} color={'#253D4E'} sx={{ lineHeight: 2, padding: '5px 0' }}>
          <LocationIcon /> <span style={{ fontWeight: 600 }}>Xem cửa hàng gần nhất</span>
        </Typography>
        <Typography fontSize={'15px'} color={'#253D4E'} sx={{ lineHeight: 2, padding: '5px 0' }}>
          <UserIcon /> <span style={{ fontWeight: 600 }}>Đăng nhập/Đăng ký</span>
        </Typography>
        <Typography fontSize={'15px'} color={'#253D4E'} sx={{ lineHeight: 2, padding: '5px 0' }}>
          <ContactIcon /> <span style={{ fontWeight: 600 }}>(+84) -123 -456 -789</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default LocationMenu;
