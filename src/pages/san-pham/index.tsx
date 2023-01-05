import { Box, Chip, Grid, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { BreadcrumbsCustom } from 'src/components/BreadcrumbsCustom';
import DefaultLayout from 'src/layouts/DefaultLayout';
import { IoIosClose } from 'react-icons/io';
import { FilterProduct } from 'src/components/FilterProduct';
import { ListProduct } from 'src/components/ListProduct';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import axiosClient from 'src/apiClient/axiosClient';
import { ProductType } from 'src/types/product';

const DealsCard = dynamic(() => import('src/components/DealsCard'), {
  ssr: false,
});

const ListProductPage = ({ data }: { data: ProductType[] }) => {
  return (
    <Box sx={{ my: '30px' }}>
      {/******** Header *********** */}
      <Box
        sx={{
          background: "url('/images/assets/header-bg.png') no-repeat center center",
          backgroundSize: 'cover',
          width: '100%',
          height: 237,
          padding: '70px 80px',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '30px',
        }}
      >
        <Box>
          <Typography variant="h4" color={'#253D4E'} fontWeight={700}>
            Cửa hàng
          </Typography>
          <BreadcrumbsCustom />
        </Box>
        <Box>
          <Chip
            sx={{
              mr: '10px',
              backgroundColor: '#fff',
              color: '#3BB77E',
              borderColor: '#3BB77E',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            icon={<IoIosClose color={'#3BB77E'} />}
            label="Thịt cá"
            variant="outlined"
          />
          <Chip
            sx={{
              mr: '10px',
              backgroundColor: '#fff',
              color: '#3BB77E',
              borderColor: '#3BB77E',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            icon={<IoIosClose color={'#3BB77E'} />}
            label="Rau xanh"
            variant="outlined"
          />
          <Chip
            sx={{
              mr: '10px',
              backgroundColor: '#fff',
              color: '#3BB77E',
              borderColor: '#3BB77E',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            icon={<IoIosClose color={'#3BB77E'} />}
            label="Trái cây"
            variant="outlined"
          />
          <Chip
            sx={{
              mr: '10px',
              backgroundColor: '#fff',
              color: '#3BB77E',
              borderColor: '#3BB77E',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            icon={<IoIosClose color={'#3BB77E'} />}
            label="Đồ đóng gói"
            variant="outlined"
          />
          <Chip
            sx={{
              mr: '10px',
              backgroundColor: '#fff',
              color: '#3BB77E',
              borderColor: '#3BB77E',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            icon={<IoIosClose color={'#3BB77E'} />}
            label="Hải sản"
            variant="outlined"
          />
        </Box>
      </Box>

      {/******** Title *********** */}
      <Box sx={{ mb: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography color={'#7E7E7E'} fontSize={'14px'}>
          Tìm thấy <span style={{ color: '#3BB77E', fontWeight: 600 }}>{data.length}</span> sản phẩm
        </Typography>
      </Box>

      {/******** Body *********** */}
      <Grid
        container
        justifyContent="space-between"
        spacing={5}
        columns={{ xs: 4, xl: 13 }}
        flexWrap={{ xs: 'wrap-reverse', xl: 'wrap' }}
      >
        <Grid item xs={4} lg={4} xl={3}>
          <FilterProduct data={data} />
        </Grid>
        <Grid item xs={4} lg={4} xl={10}>
          <ListProduct data={data} />
        </Grid>
      </Grid>
      <Box sx={{ mt: '40px' }}>
        <DealsCard isDetail />
      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await axiosClient.get(`/product`);
  const data: ProductType[] = await res.data;

  return {
    props: { data },
    revalidate: 300,
  };
};

ListProductPage.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default ListProductPage;
