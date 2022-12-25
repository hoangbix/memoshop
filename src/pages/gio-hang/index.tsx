import { Box, Button, Grid, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { BreadcrumbsCustom } from 'src/components/BreadcrumbsCustom';
import { ListProductCart } from 'src/components/Cart/ListProductCart';
import DefaultLayout from 'src/layouts/DefaultLayout';

import { BiTrash } from 'react-icons/bi';
import { PreviewCart } from 'src/components/Cart/PreviewCart';

const ShopCartPage = () => {
  return (
    <Box sx={{ mb: '44px' }}>
      <Box sx={{ borderBottom: '1px solid #cccccc80' }}>
        <BreadcrumbsCustom />
      </Box>
      <Typography variant="h5" color={'#253D4E'} fontSize={{ xs: 32, lg: 46 }} fontWeight={700}>
        Giỏ hàng của bạn
      </Typography>
      {/* <Grid container justifyContent="space-between" spacing={7} columns={{ xs: 4, lg: 10 }}> */}
      <Box sx={{ display: { sx: 'block', lg: 'flex', gap: '20px' } }}>
        <Box sx={{ width: { sx: '100%', lg: '60%', xl: '70%' } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography color={'#7E7E8F'} fontWeight={600}>
              Có <span style={{ color: '#3BB77E' }}>3</span> sản phẩm trong giỏ hàng của bạn
            </Typography>
            <Button sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
              <BiTrash fontSize={'22px'} />
              <Typography color={'#3BB77E'} fontWeight={600}>
                Xoá tất cả
              </Typography>
            </Button>
          </Box>
          <ListProductCart />
        </Box>
        <Box sx={{ flex: 1 }}>
          <PreviewCart />
        </Box>
      </Box>
      {/* </Grid> */}
    </Box>
  );
};

ShopCartPage.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default ShopCartPage;
