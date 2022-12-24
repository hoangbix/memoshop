import { Box } from '@mui/material';
import Slider from 'react-slick';
import { BestSellsCard } from '../BestSells/BestSellsCard';

import { cardProductData } from '../TabProducts/data';

const settings = {
  dots: false,
  infinite: false,
  nextArrow: <></>,
  prevArrow: <></>,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SimilarProduct = () => {
  const filteredItems = cardProductData.filter((item) => item.isHot);

  return (
    <Slider {...settings}>
      {filteredItems.slice(0, 10).map((item) => (
        <Box key={item.id} sx={{ display: 'flex', justifyContent: 'center' }}>
          <BestSellsCard data={item} />
        </Box>
      ))}
    </Slider>
  );
};

export default SimilarProduct;
