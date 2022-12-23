import { Fragment, ReactNode } from 'react';
import dynamic from 'next/dynamic';

import Carousel from 'src/components/Carousel';
import BestSells from 'src/components/BestSells';
import TabProducts from 'src/components/TabProducts';
import DefaultLayout from 'src/layouts/DefaultLayout';
import BannerFooter from 'src/components/BannerFooter';
import ServiceFooter from 'src/components/ServiceFooter';
import { BannerTopCard } from 'src/components/BannerTop';
import ProductHorizontal from 'src/components/ProductHorizontal';
import PopularCategories from 'src/components/PopularCategories';

const DealsCard = dynamic(() => import('src/components/DealsCard'), {
  ssr: false,
});

const HomePage = () => {
  return (
    <Fragment>
      <Carousel />
      <PopularCategories />
      <BannerTopCard />
      <TabProducts />
      <BestSells />
      <DealsCard />
      <ProductHorizontal />
      <BannerFooter />
      <ServiceFooter />
    </Fragment>
  );
};

HomePage.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default HomePage;
