import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CategoryCard from './CategoryCard';
import Slider from 'react-slick';

const listCategory = [
  {
    img: 'images/assets/cat-13.png',
    title: 'Bánh và sữa',
    quantity: 26,
    bg: 'F2FCE4',
    id: '1',
  },
  {
    img: 'images/assets/cat-12.png',
    title: 'Kiwi hữu cơ',
    quantity: 28,
    bg: 'FFFCEB',
    id: '2',
  },
  {
    img: 'images/assets/cat-11.png',
    title: 'Đào',
    quantity: 15,
    bg: 'ECFFEC',
    id: '3',
  },
  {
    img: 'images/assets/cat-9.png',
    title: 'Táo đỏ',
    quantity: 54,
    bg: 'FEEFEA',
    id: '4',
  },
  {
    img: 'images/assets/cat-3.png',
    title: 'Bữa ăn nhẹ',
    quantity: 56,
    bg: 'FFF3EB',
    id: '5',
  },
  {
    img: 'images/assets/cat-1.png',
    title: 'Rau',
    quantity: 72,
    bg: 'FFF3FF',
    id: '6',
  },
  {
    img: 'images/assets/cat-2.png',
    title: 'Dâu tây',
    quantity: 36,
    bg: 'F2FCE4',
    id: '7',
  },
  {
    img: 'images/assets/cat-4.png',
    title: 'Mận đen',
    quantity: 126,
    bg: 'FEEFEA',
    id: '8',
  },
  {
    img: 'images/assets/cat-5.png',
    title: 'Mãng cầu',
    quantity: 31,
    bg: 'FFFCEB',
    id: '9',
  },
  {
    img: 'images/assets/cat-14.png',
    title: 'Cà phê & Trà',
    quantity: 44,
    bg: 'FEEFEA',
    id: '10',
  },
];

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const PopularCategories = () => {
  return (
    <>
      <Typography color={'#253D4E'} fontWeight={700} fontSize={{ xs: '24px', md: '32px' }} mx={'15px'}>
        Sản phẩm đặc trưng
      </Typography>
      <Slider {...settings}>
        {listCategory.map((item, i) => (
          <Box key={i}>
            <CategoryCard data={item} />
          </Box>
        ))}
      </Slider>
    </>
  );
};

export default PopularCategories;
