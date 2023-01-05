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
import { GetStaticProps } from 'next';
import axiosClient from 'src/apiClient/axiosClient';
import { ProductType } from 'src/types/product';

const DealsCard = dynamic(() => import('src/components/DealsCard'), {
  ssr: false,
});

const HomePage = ({ data }: { data: ProductType[] }) => {
  return (
    <Fragment>
      <Carousel />
      <PopularCategories />
      <BannerTopCard />
      <TabProducts data={data} />
      <BestSells data={data} />
      <DealsCard />
      <ProductHorizontal data={data} />
      <BannerFooter />
      <ServiceFooter />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axiosClient.get('/product');
  const data: ProductType[] = await res.data;

  return {
    props: { data },
    revalidate: 30,
  };
};

HomePage.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default HomePage;
