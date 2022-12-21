import { Box, Divider, IconButton, InputAdornment, InputBase, TextField, Typography } from '@mui/material';
import { FiSend } from 'react-icons/fi';

const BannerFooter = () => {
  return (
    <Box sx={{ width: '100%', height: 417, position: 'relative', mb: '44px' }}>
      <Box
        sx={{
          backgroundImage: `url('images/assets/banner-10.png')`,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '20px',
          padding: { xs: '30px 40px', md: '50px 78px' },
        }}
      >
        <Box
          sx={{
            background: { xs: '#d2ebe0cf', md: 'transparent' },
            padding: '20px',
            borderRadius: '20px',
            display: { xs: 'flex', md: 'block' },
            justifyContent: { xs: 'center', md: 'left' },
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%',
            boxShadow: { xs: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', md: 'none' },
          }}
        >
          <Typography color={'#2e2b2b'} fontSize={{ xs: '24px', md: '40px' }} fontWeight={700}>
            Đặt hàng và cảm nhận <br /> dịch vụ tận tâm từ chúng tôi
          </Typography>
          <Typography color={'#7E7E7E'} fontSize={{ xs: '16px', md: '18px' }} fontWeight={400} sx={{ mb: '40px' }}>
            Đăng ký nhận bản tin & tin khuyến mãi
          </Typography>
          <Box
            sx={{
              p: '2px 10px',
              display: 'flex',
              alignItems: 'center',
              width: 450,
              maxWidth: '100%',
              background: '#fff',
              borderRadius: '30px',
              border: '1px solid #3BB77E',
            }}
          >
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Nhập email của bạn..." />
            <Divider sx={{ height: 28, m: 0.5, background: '#3BB77E' }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
              <FiSend />
            </IconButton>
          </Box>
        </Box>
        <Box
          component={'img'}
          src={'images/assets/banner-9.png'}
          sx={{
            maxHeight: '100%',
            height: '335px',
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: -1,
          }}
        />
      </Box>
    </Box>
  );
};

export default BannerFooter;
