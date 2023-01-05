import { Box, BoxProps, Button, Grid, List, ListItem, Rating, Stack, TextField, Typography } from '@mui/material';
import { Fragment, ReactNode, useEffect, useState } from 'react';
import { BreadcrumbsCustom } from 'src/components/BreadcrumbsCustom';
import DefaultLayout from 'src/layouts/DefaultLayout';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { TabsDesc } from 'src/components/ProductSlider/TabsDesc';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import { BiCart } from 'react-icons/bi';
import ComprareIcon from 'src/images/icons/compare.svg';
import HeartIcon from 'src/images/icons/icon-heart.svg';
import { ProductHorizontalItem } from 'src/components/ProductHorizontal/ProductHorizontalItem';
import SimilarProduct from 'src/components/SimilarProduct';
import { OrganicBanner } from 'src/components/OragicBanner';
import { SaleBanner } from 'src/components/SaleBanner';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axiosClient from 'src/apiClient/axiosClient';
import { ProductType } from 'src/types/product';
import { useRouter } from 'next/router';
import { fetchProduct } from 'src/store/product/product.thunk';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/store';
import Spinner from 'src/components/spinner';
import { format } from 'date-fns';
import Slider from 'react-slick';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 14,
    padding: '5px 10px',
  },
}));

const ProductItemWrapper = styled(Box)<BoxProps>(() => ({
  mb: '30px',
  borderBottom: '1px solid #ececec',
  ':after': {
    content: '""',
    width: '80px',
    height: '2px',
    display: 'block',
    bottom: 0,
    left: 0,
    backgroundColor: '#3bb77e',
  },
}));

const ProductDetail = (data: ProductType) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { data: listProduct } = useSelector((state: RootState) => state.product);
  // const trending = listProduct.filter((item) => item.isNew);
  const trending = listProduct.filter((item) => item);
  const similar = listProduct.filter((item) => item.category === data.category);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();

  if (router.isFallback) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Box sx={{ borderBottom: '1px solid #cccccc80' }}>
        <BreadcrumbsCustom title={data.title} />
      </Box>
      <Box sx={{ my: '30px', padding: '10px' }}>
        <Grid container justifyContent="space-between" spacing={5} columns={{ xs: 4, lg: 8 }}>
          <Grid item xs={4} sm={4} md={3}>
            <Box
              sx={{
                width: 528,
                maxWidth: '100%',
                border: '1px solid #cccccc80',
                borderRadius: '5px',
                margin: '0 auto',
              }}
            >
              <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                {data.images.map((image, index) => (
                  <Box
                    key={index}
                    component={'img'}
                    sx={{ width: '100%', height: '100%', borderRadius: '5px', objectFit: 'cover' }}
                    src={image.url}
                  />
                ))}
              </Slider>
            </Box>

            {data.images.length > 1 ? (
              <Box sx={{ mt: '30px' }}>
                <Slider
                  asNavFor={nav1}
                  ref={(slider2) => setNav2(slider2)}
                  slidesToShow={data.images.length < 3 ? data.images.length : 3}
                  swipeToSlide={true}
                  focusOnSelect={true}
                >
                  {data.images.map((image, index) => (
                    <Box key={index} sx={{ padding: '10px', cursor: 'pointer' }}>
                      <Box
                        component={'img'}
                        sx={{ width: '100%', height: '100%', borderRadius: '20px' }}
                        src={image.url}
                      />
                    </Box>
                  ))}
                </Slider>
              </Box>
            ) : null}
          </Grid>
          <Grid item xs={4} sm={4} md={5} sx={{ flex: 1 }}>
            <Box sx={{ ml: { xs: '0', md: '30px' } }}>
              {data.promotionalPrice ? (
                <Typography
                  color={'#f74b81'}
                  sx={{
                    backgroundColor: '#fde0e9',
                    display: 'inline-block',
                    padding: '8px 12px',
                    mb: '20px',
                    fontSize: '14px',
                    fontWeight: 700,
                    borderRadius: '5px',
                  }}
                >
                  Đang giảm giá
                </Typography>
              ) : null}
              <Typography
                variant={'h2'}
                sx={{
                  fontSize: { xs: '20px', lg: '32px' },
                  color: '#253D4E',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: { xs: 3, lg: 2 },
                }}
              >
                {data.title}
              </Typography>
              <Box sx={{ padding: '15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Rating size="small" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                <Typography>(32 đánh giá)</Typography>
              </Box>
              <Box sx={{ padding: '15px 0', display: { xs: 'block', md: 'flex' }, alignItems: 'center', gap: '10px' }}>
                <Typography color={'#3BB77E'} fontSize={{ xs: '22px', lg: '38px' }} fontWeight={'bold'}>
                  {(135000).toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
                </Typography>
                {data.promotionalPrice ? (
                  <Box sx={{ display: { xs: 'flex', md: 'block' }, alignItems: 'center', gap: '10px' }}>
                    <Typography color={'#FDC040'} fontSize="14px" fontWeight={'bold'}>
                      Giảm {Math.abs(((data.promotionalPrice - data.price) / data.price) * 100).toFixed(0)}%
                    </Typography>
                    <Typography
                      color={'#adadad'}
                      fontSize={{ xs: '18px', lg: '28px' }}
                      fontWeight={'600'}
                      sx={{ textDecoration: 'line-through' }}
                    >
                      {(150000).toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
                    </Typography>
                  </Box>
                ) : null}
              </Box>
              <Typography
                gutterBottom
                sx={{
                  color: '#7E7E7E',
                  fontSize: { xs: '14px', lg: '16px' },
                  fontWeight: 600,
                  lineHeight: '24px',
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                }}
              >
                {data.shortDesc}
              </Typography>
              {/* <FormControl sx={{ my: '20px' }}>
                <FormLabel id="demo-row-radio-buttons-group-label" sx={{ fontSize: { xs: '14px', lg: '16px' } }}>
                  Kích thước/Trọng lượng
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue={'60'}
                >
                  <FormControlLabel value="50" control={<Radio />} label="50g" />
                  <FormControlLabel value="60" control={<Radio />} label="60g" />
                  <FormControlLabel value="100" control={<Radio />} label="100g" />
                  <FormControlLabel value="150" control={<Radio />} label="150g" />
                </RadioGroup>
              </FormControl> */}
              <Box sx={{ display: { xs: 'block', md: 'flex' }, alignItems: 'center', gap: '15px', my: '20px' }}>
                <Box sx={{ display: 'flex', gap: '10px', mb: '10px' }}>
                  <TextField
                    inputProps={{
                      type: 'number',
                      min: 1,
                      max: 10,
                      defaultValue: 1,
                      style: {
                        fontWeight: 700,
                        minWidth: 35,
                        maxWidth: '100%',
                        height: 12,
                        border: '2px solid #3BB77E',
                        borderRadius: '5px',
                        textAlign: 'center',
                      },
                    }}
                  />

                  <Button
                    variant="contained"
                    startIcon={<BiCart />}
                    sx={{
                      width: 224,
                      maxWidth: '100%',
                      height: '48px',
                      backgroundColor: '#3BB77E',
                      color: 'white',
                      fontWeight: 700,
                      borderRadius: '5px',
                    }}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', mb: '10px' }}>
                  <LightTooltip title="Thêm vào danh sách yêu thích">
                    <Button
                      variant="outlined"
                      sx={{
                        minWidth: '40px',
                        height: '48px',
                        borderColor: '#f1f1f1',
                        gap: '5px',
                        border: '1px solid #3bb77e',
                      }}
                    >
                      <HeartIcon />
                    </Button>
                  </LightTooltip>
                  <LightTooltip title="So sánh">
                    <Button
                      variant="outlined"
                      sx={{
                        minWidth: '40px',
                        height: '48px',
                        borderColor: '#f1f1f1',
                        gap: '5px',
                        border: '1px solid #3bb77e',
                      }}
                    >
                      <ComprareIcon />
                    </Button>
                  </LightTooltip>
                </Box>
              </Box>
              <Grid container spacing={5} sx={{ mt: '30px' }}>
                <Grid item xs={12} md={6}>
                  <Typography>
                    Nhà cung cấp: <span style={{ fontWeight: 600, color: '#3BB77E' }}>{data.brand}</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>
                    Ngày nhập hàng:{' '}
                    <span style={{ fontWeight: 600, color: '#3BB77E' }}>
                      {format(new Date(data.importWarehouseDate), 'dd-MM-yyyy') || ''}
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>
                    Danh mục: <span style={{ fontWeight: 600, color: '#3BB77E' }}>{data.category}</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>
                    Hạn sử dụng:{' '}
                    <span style={{ fontWeight: 600, color: '#3BB77E' }}>
                      {format(new Date(data.expirationDate), 'dd-MM-yyyy') || ''}
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>
                    Kho hàng: <span style={{ fontWeight: 600, color: '#3BB77E' }}>{data.quantity} sản phẩm</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography>
                    SKU: <span style={{ fontWeight: 600, color: '#3BB77E' }}>JGHG878LA51</span>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" spacing={5} columns={{ xs: 4, lg: 8 }} sx={{ my: '20px' }}>
          <Grid item xs={4} sm={4} md={6}>
            <TabsDesc data={data} />
            <Box sx={{ mt: '30px' }}>
              <ProductItemWrapper>
                <Typography
                  color={'#253D4E'}
                  fontSize={'24px'}
                  fontWeight={700}
                  sx={{
                    height: '40px',
                  }}
                >
                  Sản phẩm tương tự
                </Typography>
              </ProductItemWrapper>
              {/************ Similar Product*/}
              <Box sx={{ mt: '30px' }}>
                <SimilarProduct data={similar} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <Box sx={{ background: '#fff', padding: '10px', borderRadius: '10px' }}>
              <ProductItemWrapper>
                <Typography
                  color={'#253D4E'}
                  fontSize={'24px'}
                  fontWeight={700}
                  sx={{
                    height: '40px',
                  }}
                >
                  Sản phẩm mới
                </Typography>
              </ProductItemWrapper>
              {trending.length
                ? trending.slice(0, 4).map((item) => (
                    <Stack key={item._id} sx={{ margin: '10px 0' }}>
                      <ProductHorizontalItem product={item} />
                    </Stack>
                  ))
                : null}
            </Box>
            <Box sx={{ mt: '20px' }}>
              <OrganicBanner />
            </Box>
            <Box sx={{ mt: '20px' }}>
              <SaleBanner />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axiosClient.get('/product');
  const data: ProductType[] = await res.data;

  const paths = data.map((item: ProductType) => ({ params: { slug: item.slug } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const res = await axiosClient.get(`/product/slug/${params?.slug}`);
  const data: ProductType = await res.data;

  return {
    props: data,
    revalidate: 300,
  };
};

ProductDetail.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default ProductDetail;
