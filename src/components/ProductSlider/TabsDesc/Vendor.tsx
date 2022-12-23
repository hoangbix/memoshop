import { Box, Rating, Typography } from '@mui/material';

import LocationIcon from 'src/images/icons/icon-location.svg';
import ContactIcon from 'src/images/icons/icon-contact.svg';

export const Vendor = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', mb: '30px' }}>
        <Box component={'img'} src={'https://wp.alithemes.com/html/nest/demo/assets/imgs/vendor/vendor-18.svg'} />
        <Box>
          <Typography>Noodles & Company</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Rating sx={{ fontSize: '15px' }} name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            <Typography fontSize={'12px'}>(196 đánh giá)</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ mb: '30px' }}>
        <Typography fontSize={'15px'} color={'#253D4E'} sx={{ lineHeight: 2 }}>
          <LocationIcon /> <span style={{ fontWeight: 700 }}>Địa chỉ:</span> 5171 W Campbell Ave undefined Kent, Utah
          53127 Hoa Kỳ
        </Typography>
        <Typography fontSize={'15px'} color={'#253D4E'} sx={{ lineHeight: 2 }}>
          <ContactIcon /> <span style={{ fontWeight: 700 }}>Liên hệ nhà sản xuất:</span> (+91)-540-025-553
        </Typography>
      </Box>
      <Box sx={{ mb: '30px', display: 'flex', alignItems: 'center', gap: '30px' }}>
        <Box>
          <Typography color={'#3BB77E'} fontSize={'12px'} fontWeight={700}>
            Xếp hạng
          </Typography>
          <Typography textAlign={'center'} color={'#253D69'} fontSize={'20px'} fontWeight={700}>
            92%
          </Typography>
        </Box>
        <Box>
          <Typography color={'#3BB77E'} fontSize={'12px'} fontWeight={700}>
            Vận chuyển đúng giờ
          </Typography>
          <Typography textAlign={'center'} color={'#253D69'} fontSize={'20px'} fontWeight={700}>
            100%
          </Typography>
        </Box>
        <Box>
          <Typography color={'#3BB77E'} fontSize={'12px'} fontWeight={700}>
            Phản hồi trò chuyện
          </Typography>
          <Typography textAlign={'center'} color={'#253D69'} fontSize={'20px'} fontWeight={700}>
            89%
          </Typography>
        </Box>
      </Box>
      <Typography color={'#7E7E7E'} fontSize={'14px'} lineHeight={'24px'}>
        Noodles & Company là một nhà hàng ăn nhanh bình dân của Mỹ cung cấp các món mì và mì ống của Mỹ và quốc tế cùng
        với súp và sa lát. Noodles & Company được thành lập vào năm 1995 bởi Aaron Kennedy và có trụ sở tại Broomfield,
        Colorado. Công ty ra mắt công chúng vào năm 2013 và ghi nhận doanh thu 457 triệu đô la vào năm 2017. Vào cuối
        năm 2018, có 460 địa điểm của Noodles & Company trên 29 tiểu bang và Washington, DC
      </Typography>
    </Box>
  );
};
