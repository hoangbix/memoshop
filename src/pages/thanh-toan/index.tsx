import { Box, Button, Divider, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';

import { ReactNode } from 'react';
import { BreadcrumbsCustom } from 'src/components/BreadcrumbsCustom';
import { PreviewCart } from 'src/components/Cart/PreviewCart';
import DefaultLayout from 'src/layouts/DefaultLayout';

import { CiDiscount1 } from 'react-icons/ci';
import { FormCheckout } from 'src/components/FormCheckout';
import ServiceFooter from 'src/components/ServiceFooter';

const CheckoutPage = () => {
  return (
    <>
      <Box sx={{ mb: '44px' }}>
        <Box sx={{ borderBottom: '1px solid #cccccc80' }}>
          <BreadcrumbsCustom />
        </Box>
        <Typography variant="h5" color={'#253D4E'} fontSize={{ xs: 32, lg: 46 }} fontWeight={700}>
          Thanh toán
        </Typography>
        <Grid container justifyContent="space-between" spacing={7} columns={{ xs: 4, lg: 10 }}>
          <Grid item xs={4} sm={4} md={7}>
            <Typography color={'#7E7E8F'} fontWeight={600}>
              Có <span style={{ color: '#3BB77E' }}>3</span> sản phẩm trong giỏ hàng của bạn
            </Typography>
            <Box sx={{ mt: '30px', display: { sx: 'block', lg: 'flex' }, justifyContent: 'space-between' }}>
              <Paper
                variant="outlined"
                sx={{ width: { xs: '100%', lg: 430 }, maxWidth: '100%', padding: '10px', mb: '10px' }}
              >
                <Typography color={'#7E7E8F'} fontWeight={600}>
                  Bạn đã có tài khoản?{' '}
                  <Typography component={'span'} color={'#3BB77E'} fontWeight={600}>
                    Nhấn vào đây để đăng nhập
                  </Typography>
                </Typography>
              </Paper>
              <Paper
                component="form"
                variant="outlined"
                sx={{
                  pl: '4px',
                  pr: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  width: { xs: '100%', lg: 430 },
                  height: '50px',
                }}
              >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                  <CiDiscount1 />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Nhập mã giảm giá của bạn"
                  inputProps={{ 'aria-label': 'Nhập mã giảm giá của bạn' }}
                />
                <Button variant="contained" sx={{ borderRadius: '10px', height: '44px', fontWeight: 700 }}>
                  Áp dụng
                </Button>
              </Paper>
            </Box>
            {/**Form */}
            <Box sx={{ my: '30px' }}>
              <FormCheckout />
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <PreviewCart onlyRead />
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ mb: '30px' }} />
      <ServiceFooter />
    </>
  );
};

CheckoutPage.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default CheckoutPage;
