/* eslint-disable @next/next/no-img-element */
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import Slider from 'react-slick';

const images = [
  {
    img: 'images/assets/slider-1.png',
    title: 'Trái cây',
    title2: 'Giảm giá lớn',
    desc: 'Tiết kiệm tới 50% cho đơn hàng đầu tiên',
    buttonText: 'Mua ngay',
    to: '/',
  },
  {
    img: 'images/assets/slider-2.png',
    title: 'Đừng bỏ lỡ',
    title2: 'Các khuyến mãi cuối năm',
    desc: 'Từ ngày 18/12/2022 đến 01/02/2023 giảm 15% cho tất cả hóa đơn trên 500k',
    buttonText: 'Mua ngay',
    to: '/',
  },
];

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const Carousel = () => {
  return (
    <Container
      maxWidth={'xl'}
      sx={{
        my: '30px',
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Slider {...settings}>
        {images.map((item, i) => (
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
            }}
            key={i}
          >
            <div style={{ width: '100%', position: 'relative' }}>
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '25px',
                }}
                src={item.img}
                alt=""
              />
            </div>
            <Box style={{ position: 'absolute', top: '20%', left: '10%' }}>
              <Typography
                component={'h3'}
                fontSize={{ md: '52px', lg: '72px' }}
                color={'#253D4E'}
                fontWeight={700}
                lineHeight={1}
              >
                {item.title}
              </Typography>
              <Typography
                component={'h3'}
                fontSize={{ md: '52px', lg: '72px' }}
                color={'#253D4E'}
                fontWeight={700}
                lineHeight={1}
              >
                {item.title2}
              </Typography>
              <Typography fontSize={{ md: '24px', lg: '30px' }} color={'#7E7E7E'} fontWeight={400} marginTop={'10px'}>
                {item.desc}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: '20px',
                  textTransform: 'uppercase !important',
                  fontSize: '18px',
                  color: '#fff !important',
                  boxShadow: 'none',
                  ':hover': {
                    backgroundColor: '#48c38a',
                    boxShadow: 'none',
                  },
                }}
                component={Link}
                href={item.to}
              >
                {item.buttonText}
              </Button>
            </Box>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;
