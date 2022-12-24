/* eslint-disable @next/next/no-img-element */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { BiRightArrowAlt } from 'react-icons/bi';
import CountdownTimer from './CountdownTimer';

const listBanners = [
  {
    img: 'images/assets/banner-6.jpg',
    to: '/',
    title: 'Mừng năm mới 2023, rau củ giảm tới 50%. Nhanh tay lên, số lượng có hạn',
    price: 22000,
    discount: 50,
    promotionDay: 'Tue Dec 20 2022 15:15:37 GMT+0700 (Indochina Time)',
  },
  {
    img: 'images/assets/banner-2.png',
    to: '/',
    title: 'Làm cho bữa sáng của bạn lành mạnh & dễ dàng',
    price: 150000,
    discount: 30,
    promotionDay: 'Tue Dec 28 2022 00:00:00 GMT+0700 (Indochina Time)',
  },
  {
    img: 'images/assets/banner-8.png',
    to: '/',
    title:
      'Giảm đến 42% cho tất cả trái cây duy nhất ngày Giáng sinh 24/12/2022. Mức giảm giá áp dụng cho tất cả các sản phẩm có trong danh mục',
    price: 150000,
    discount: 42,
    promotionDay: 'Tue Dec 29 2022 14:40:11 GMT+0700 (Indochina Time)',
  },
  {
    img: 'images/assets/banner-3.png',
    to: '/',
    title: 'Các sản phẩm hữu cơ trực tuyến tốt nhất',
    price: 150000,
    discount: 60,
    promotionDay: 'Tue Dec 27 2022 19:30:40 GMT+0700 (Indochina Time)',
  },
];
export const DealsCardItem = ({ isDetail }: { isDetail?: boolean }) => {
  return (
    <Box sx={{ mt: '30px' }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ sx: 4, md: 8, xl: 16 }}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        {listBanners.map((item, i) => (
          <Grid key={i} item xs={4} sm={4} md={4} xl={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              sx={{
                height: { sx: '100%', lg: 350 },
                width: { sx: '100%', lg: 378 },
                maxWidth: '100%',
                borderRadius: '20px',
                transition: '0.4s ease-in-out',
                backgroundImage: `url("${item.img}")`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundClip: 'cover',
                boxShadow: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                ':hover': {
                  boxShadow:
                    'rgba(0, 0, 0, 0.07) 0px 1px 1px 0px, rgba(0, 0, 0, 0.07) 0px 2px 2px 0px, rgba(0, 0, 0, 0.07) 0px 4px 4px 0px, rgba(0, 0, 0, 0.07) 0px 8px 8px 0px, rgba(0, 0, 0, 0.07) 0px 16px 16px 0px',
                },
              }}
            >
              <Box
                sx={{
                  bottom: '-40%',
                  width: 325,
                  maxWidth: '100%',
                  height: 335,
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '15px',
                  zIndex: 2,
                }}
              >
                <CountdownTimer date={item.promotionDay} />
                <Box
                  sx={{
                    width: '90%',
                    height: '192px',
                    background: '#fff',
                    borderRadius: '15px',
                    boxShadow: '5px 5px 15px rgb(0 0 0 / 5%)',
                    padding: { sx: '10px', lg: '20px' },
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    height={'65px'}
                    sx={{
                      color: '#253D4E',
                      fontSize: '16px',
                      fontWeight: 600,
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 3,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography color={'#3BB77E'} fontSize="18px" fontWeight={600}>
                    Giá chỉ từ: {item.price.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
                  </Typography>
                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    variant="contained"
                    endIcon={<BiRightArrowAlt />}
                    sx={{
                      width: '100%',
                      height: '36px',
                      backgroundColor: '#3BB77E',
                      color: 'white',
                      fontWeight: 700,
                      borderRadius: '1px',
                      mt: '20px',
                      fontSize: { xs: '14px', lg: '16px' },
                    }}
                  >
                    Xem tất cả sản phẩm
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
