import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';

import LogoIcon from 'src/images/icons/logo.svg';
import LocationIcon from 'src/images/icons/icon-location.svg';
import ContactIcon from 'src/images/icons/icon-contact.svg';
import EmailIcon from 'src/images/icons/icon-email-2.svg';
import ClockIcon from 'src/images/icons/icon-clock.svg';

const FooterMenu = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '44px', borderTop: '1px solid #cccccc80' }}>
      <Grid container columns={{ xs: 4, md: 8, xl: 16, xxl: 20 }} sx={{ alignItems: 'self-start', mt: '30px' }}>
        <Grid item xs={4} sm={4} md={4} xl={4} sx={{ display: 'flex' }}>
          <Box sx={{ maxWidth: 330, padding: '0 5px' }}>
            <Box component={Link} href={'/'}>
              <LogoIcon />
            </Box>
            <Box sx={{ mt: '10px' }}>
              <Typography fontSize={'15px'} color={'#253D4E'} sx={{ lineHeight: 2 }}>
                <LocationIcon /> <span style={{ fontWeight: 600 }}>Địa chỉ:</span> 41 Đội Cung - Phường 11 - Quận 11
              </Typography>
              <Typography fontSize={'15px'} color={'#253D4E'} sx={{ lineHeight: 2 }}>
                <ContactIcon /> <span style={{ fontWeight: 600 }}>Hotline:</span> 0938 334 526
              </Typography>
              <Typography fontSize={'15px'} color={'#253D4E'} sx={{ lineHeight: 2 }}>
                <EmailIcon /> <span style={{ fontWeight: 600 }}>Email:</span> memo@gmail.com
              </Typography>
              <Typography fontSize={'15px'} color={'#253D4E'} sx={{ lineHeight: 2 }}>
                <ClockIcon /> <span style={{ fontWeight: 600 }}>Làm việc:</span> 10:00 - 18:00, T2-T7
              </Typography>
            </Box>
          </Box>
        </Grid>
        {aboutUs.map((item, i) => (
          <Grid
            key={i}
            item
            xs={4}
            sm={4}
            md={4}
            xl={4}
            sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
          >
            <Box sx={{ maxWidth: 320, padding: '0 5px' }}>
              <Typography color={'#253D4E'} fontSize={'24px'} fontWeight={700} sx={{ margin: '20px 0 5px 0' }}>
                {item.title}
              </Typography>
              {item.menus.map((menu, i) => (
                <Box key={i} sx={{ display: 'flex' }}>
                  <Typography
                    component={Link}
                    href={menu.to}
                    fontSize={'15px'}
                    color={'#253D4E'}
                    sx={{ lineHeight: 2 }}
                  >
                    {menu.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
        <Grid item xs={4} sm={4} md={4} xl={4} sx={{ display: 'flex' }}>
          <Box sx={{ maxWidth: 320, padding: '0 5px' }}>
            <Typography color={'#253D4E'} fontSize={'24px'} fontWeight={700} sx={{ margin: '15px 0 20px 0' }}>
              Cài đặt ứng dụng
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Typography fontSize={'15px'} color={'#253D4E'}>
                Từ App Store hoặc Google Play
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '15px', my: '20px' }}>
              <Box component={'img'} width={'128px'} src={'/images/assets/app-store.jpg'} />
              <Box component={'img'} width={'128px'} src={'/images/assets/google-play.jpg'} />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Typography fontSize={'15px'} color={'#253D4E'}>
                Cổng thanh toán an toàn
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '15px', my: '20px' }}>
              <Box component={'img'} width={'224px'} src={'/images/assets/payment-method.png'} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterMenu;

const aboutUs = [
  {
    title: 'Về chúng tôi',
    menus: [
      { text: 'Thông tin giao hàng', to: '/' },
      { text: 'Chính sách bảo mật', to: '/' },
      { text: 'Điều khoản & điều kiện', to: '/' },
      { text: 'Liên hệ chúng tôi', to: '/' },
      { text: 'Trung tâm hỗ trợ', to: '/' },
    ],
  },
  {
    title: 'Tài khoản',
    menus: [
      { text: 'Đăng nhập', to: '/' },
      { text: 'Xem giỏ hàng', to: '/' },
      { text: 'Sản phẩm yêu thích', to: '/' },
      { text: 'Chi tiết sản phẩm', to: '/' },
      { text: 'So sánh sản phẩm', to: '/' },
    ],
  },
  {
    title: 'Công ty',
    menus: [
      { text: 'Trở thành nhà cung cấp', to: '/' },
      { text: 'Trở thành Đại lý', to: '/' },
      { text: 'Xem nhà cung cấp', to: '/' },
      { text: 'Khả năng tiếp cận', to: '/' },
      { text: 'Khuyến mãi', to: '/' },
    ],
  },
];
