/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ListTabProductsType, ProductType } from 'src/types/product';
import { cardProductData } from '../TabProducts/data';
import TabFilter from '../TabProducts/TabFilter';
import { BiLogInCircle } from 'react-icons/bi';

import { motion } from 'framer-motion';
import { BestSellsCard } from './BestSellsCard';
import Slider from 'react-slick';

const listTabProducts: ListTabProductsType[] = [
  { category: 'selling', to: '/', id: 1, name: 'Bán chạy' },
  { category: 'sale', to: '/', id: 2, name: 'Đang giảm giá' },
  { category: 'new', to: '/', id: 3, name: 'Sản phẩm mới' },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  // autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BestSells = () => {
  const [filteredItems, setFilteredItems] = useState<ProductType[]>(cardProductData.filter((item) => item.isHot) || []);

  const handleFilter = (i: string) => {
    if (i === 'selling') return setFilteredItems(cardProductData.filter((item) => item.isHot));
    if (i === 'sale') return setFilteredItems(cardProductData.filter((item) => item.discount));

    setFilteredItems(cardProductData.filter((item) => item.isNew));
  };

  return (
    <Box sx={{ mb: '44px' }}>
      <TabFilter data={listTabProducts} onFilter={handleFilter} title={'Bán chạy nhất hàng tuần'} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '30px', gap: '20px' }}>
        <Box sx={{ display: { xs: 'none', xl: 'flex' } }}>
          <Paper
            sx={{
              height: 520,
              width: { xl: 300, xxl: 350 },
              maxWidth: '100%',
              borderRadius: '20px',
              backgroundImage: `url('images/assets/banner-4.png')`,
              backgroundPosition: 'bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              transition: '0.2s ease-in-out',
              padding: '20px',
              ':hover': {
                boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
              },
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                top: '25%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <Typography color={'#253D4E'} fontSize={'25px'} fontWeight={700} sx={{ cursor: 'default' }}>
                Sản phẩm vì sức khỏe của Khách hàng. <br /> 100% sản phẩm đạt chứng nhận VietGAP
              </Typography>
              <Button
                sx={{ mt: '40px', textTransform: 'uppercase !important', color: 'white !important' }}
                variant="contained"
                endIcon={<BiLogInCircle />}
                component={Link}
                href={'/'}
              >
                Mua ngay
              </Button>
            </Box>
            <img
              src="images/assets/vietgap.png"
              alt="vietgap"
              width={'180px'}
              style={{ position: 'absolute', bottom: 0, right: 0 }}
            />
          </Paper>
        </Box>
        <Box sx={{ flex: 1, width: '75%', height: 520 }}>
          <Slider {...settings}>
            {filteredItems.slice(0, 10).map((item) => (
              <Box
                key={item.id}
                sx={{ display: 'flex', justifyContent: 'center' }}
                component={motion.div}
                layout
                initial={{ transform: 'scale(0)' }}
                animate={{ transform: 'scale(1)' }}
                exit={{ transform: 'scale(0)' }}
                style={{ overflow: 'hidden' }}
              >
                <BestSellsCard data={item} />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default BestSells;
