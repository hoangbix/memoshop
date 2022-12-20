import { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import Carousel from 'src/components/Carousel';
import Container from '@mui/material/Container';
import BestSells from 'src/components/BestSells';
import TabProducts from 'src/components/TabProducts';
import DefaultLayout from 'src/layouts/DefaultLayout';
import { BannerTopCard } from 'src/components/BannerTop';
import PopularCategories from 'src/components/PopularCategories';
import ProductHorizontal from 'src/components/ProductHorizontal';

const DealsCard = dynamic(() => import('src/components/DealsCard'), {
  ssr: false,
});

const HomePage = () => {
  return (
    <Container maxWidth={'xl'} sx={{ mb: '40vh' }}>
      <Carousel />
      <PopularCategories />
      <BannerTopCard />
      <TabProducts />
      <BestSells />
      <DealsCard />
      <ProductHorizontal />
    </Container>
  );
};

HomePage.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default HomePage;
