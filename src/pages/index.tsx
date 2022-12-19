import { Container } from '@mui/material';
import { ReactNode } from 'react';
import { BannerTopCard } from 'src/components/BannerTop';
import Carousel from 'src/components/Carousel';
import PopularCategories from 'src/components/PopularCategories';

import DefaultLayout from 'src/layouts/DefaultLayout';

const HomePage = () => {
  return (
    <Container maxWidth={'xl'} sx={{ mb: '40vh' }}>
      <Carousel />
      <PopularCategories />
      <BannerTopCard />
    </Container>
  );
};

HomePage.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default HomePage;
