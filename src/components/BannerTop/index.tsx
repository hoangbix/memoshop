/* eslint-disable @next/next/no-img-element */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { BiLogInCircle } from 'react-icons/bi';

const listBanners = [
  {
    img: 'images/assets/banner-1.png',
    to: '/',
    text: 'Tươi & Sạch mỗi ngày với các sản phẩm từ cửa hàng của chúng tôi',
  },
  { img: 'images/assets/banner-2.png', to: '/', text: 'Làm cho bữa sáng của bạn lành mạnh & dễ dàng' },
  { img: 'images/assets/banner-3.png', to: '/', text: 'Các sản phẩm hữu cơ trực tuyến tốt nhất' },
];

export const BannerTopCard = () => {
  return (
    <Box sx={{ mt: '30px' }}>
      <Grid item xs={16}>
        <Grid container justifyContent="center" spacing={5} columns={{ xs: 1, sm: 8, md: 12 }}>
          {listBanners.map((item, i) => (
            <Grid key={i} item xs={1} sm={4} md={4}>
              <Paper
                sx={{
                  height: 307,
                  maxWidth: 506,
                  borderRadius: '20px',
                  backgroundImage: `url('${item.img}')`,
                  backgroundPosition: 'right',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  transition: '0.2s ease-in-out',
                  padding: '20px',
                  ':hover': {
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Typography color={'#253D4E'} fontSize={'24px'} fontWeight={700} sx={{ cursor: 'default' }}>
                    {item.text}
                  </Typography>
                  <Button
                    sx={{ mt: '15px', textTransform: 'uppercase !important', color: 'white !important' }}
                    variant="contained"
                    endIcon={<BiLogInCircle />}
                    component={Link}
                    href={'/'}
                  >
                    Mua ngay
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
