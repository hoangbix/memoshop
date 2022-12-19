import { Container } from '@mui/material';
import { ReactNode } from 'react';
import { BannerTopCard } from 'src/components/BannerTop';
import BestSells from 'src/components/BestSells';
import Carousel from 'src/components/Carousel';
import PopularCategories from 'src/components/PopularCategories';
import TabProducts from 'src/components/TabProducts';

import DefaultLayout from 'src/layouts/DefaultLayout';

const HomePage = () => {
  return (
    <Container maxWidth={'xl'} sx={{ mb: '40vh' }}>
      <Carousel />
      <PopularCategories />
      <BannerTopCard />
      <TabProducts />
      <BestSells />
    </Container>
  );
};

HomePage.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default HomePage;
