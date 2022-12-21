import { Box, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { FiPhoneCall } from 'react-icons/fi';

import FacebookIcon from 'src/images/icons/icons-facebook.svg';
import InstagramIcon from 'src/images/icons/icons-instagram.svg';

export const FooterCopyRight = () => {
  return (
    <Box sx={{ borderTop: '1px solid #d2ebe0cf', mb: '30px' }}>
      <Box
        sx={{
          mt: '30px',
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-between' },
          alignItems: 'center',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography>
          © 2022, <span style={{ color: '#3BB77E', fontWeight: 600 }}>MemoShop</span> - Đã đăng ký bản quyền <br />
          Thiết kế bởi{' '}
          <Link target={'_blank'} href="https://www.facebook.com/hoangbix">
            HoangBily
          </Link>
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '40px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <FiPhoneCall fontSize={'36px'} />
            <Box>
              <Typography color={'#3BB77E'} fontSize={'26px'} fontWeight={700} lineHeight={1}>
                0938 334 526
              </Typography>
              <Typography>Làm việc 08:00 - 22:00</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <FiPhoneCall fontSize={'36px'} />
            <Box>
              <Typography color={'#3BB77E'} fontSize={'26px'} fontWeight={700} lineHeight={1}>
                1900 - 9999
              </Typography>
              <Typography>Hỗ trợ 24/7</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right', gap: '40px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography color={'#253D4E'} fontWeight={700} sx={{ mr: '10px' }}>
                Theo dõi chúng tôi
              </Typography>
              <FacebookIcon />
              <InstagramIcon />
            </Box>
          </Box>
          <Typography>Giảm 15% cho hóa đơn 200k khi theo dõi lần đầu</Typography>
        </Box>
      </Box>
    </Box>
  );
};
