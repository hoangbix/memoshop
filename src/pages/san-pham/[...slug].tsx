import {
  Box,
  BoxProps,
  Button,
  Grid,
  List,
  ListItem,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Fragment, ReactNode } from 'react';
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
import { BiLogInCircle } from 'react-icons/bi';

import { BiCart } from 'react-icons/bi';
import ComprareIcon from 'src/images/icons/compare.svg';
import HeartIcon from 'src/images/icons/icon-heart.svg';
import { ProductHorizontalItem } from 'src/components/ProductHorizontal/ProductHorizontalItem';
import { cardProductData } from 'src/components/TabProducts/data';
import SimilarProduct from 'src/components/SimilarProduct';

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

const ProductDetail = () => {
  const trending = cardProductData.filter((item) => item.isNew);

  return (
    <Fragment>
      <BreadcrumbsCustom />
      <Box sx={{ my: '30px' }}>
        <Grid container justifyContent="space-between" spacing={5} columns={{ xs: 4, lg: 8 }}>
          <Grid item xs={4} sm={4} md={3}>
            <Box
              sx={{
                width: 528,
                height: 528,
                maxWidth: '100%',
                border: '1px solid #cccccc80',
                borderRadius: '20px',
              }}
            >
              <Box
                component={'img'}
                sx={{ width: '100%', height: '100%', borderRadius: '20px' }}
                src={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-7.jpg'}
              />
            </Box>
            <Box
              sx={{
                width: '100%',
                height: 118,
                display: 'flex',
                gap: '20px',
                my: '20px',
              }}
            >
              <Box
                component={'img'}
                sx={{ width: 118, height: '100%', borderRadius: '10px' }}
                src={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-7.jpg'}
              />
              <Box
                component={'img'}
                sx={{ width: 118, height: '100%', borderRadius: '10px' }}
                src={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-7.jpg'}
              />
              <Box
                component={'img'}
                sx={{ width: 118, height: '100%', borderRadius: '10px' }}
                src={'https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-7.jpg'}
              />
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={5} sx={{ flex: 1 }}>
            <Box sx={{ ml: '30px' }}>
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
              <Typography
                variant={'h2'}
                sx={{
                  fontSize: '40px',
                  color: '#253D4E',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 2,
                }}
              >
                Hạt hạnh nhân hữu cơ Smart Organic 200Gr
              </Typography>
              <Box sx={{ padding: '15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Rating size="small" name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                <Typography>(32 đánh giá)</Typography>
              </Box>
              <Box sx={{ padding: '15px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Typography color={'#3BB77E'} fontSize="58px" fontWeight={'bold'}>
                  {(135000).toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
                </Typography>
                <Box>
                  <Typography color={'#FDC040'} fontSize="14px" fontWeight={'bold'}>
                    Giảm 12%
                  </Typography>
                  <Typography
                    color={'#adadad'}
                    fontSize="28px"
                    fontWeight={'600'}
                    sx={{ textDecoration: 'line-through' }}
                  >
                    {(150000).toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
                  </Typography>
                </Box>
              </Box>
              <Typography
                gutterBottom
                sx={{
                  color: '#7E7E7E',
                  fontSize: '17px',
                  fontWeight: 600,
                  lineHeight: '24px',
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 4,
                }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis
                minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.
              </Typography>
              <FormControl sx={{ my: '20px' }}>
                <FormLabel id="demo-row-radio-buttons-group-label">Kích thước/Trọng lượng</FormLabel>
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
              </FormControl>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <TextField
                  inputProps={{
                    type: 'number',
                    min: 1,
                    max: 10,
                    defaultValue: 1,
                    style: {
                      fontWeight: 700,
                      minWidth: 60,
                      height: 15,
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
                    height: '52px',
                    backgroundColor: '#3BB77E',
                    color: 'white',
                    fontWeight: 700,
                    borderRadius: '5px',
                  }}
                >
                  Thêm vào giỏ hàng
                </Button>
                <LightTooltip title="Thêm vào danh sách yêu thích">
                  <Button
                    variant="outlined"
                    sx={{ minWidth: '40px', height: '52px', borderColor: '#f1f1f1', gap: '5px' }}
                  >
                    <HeartIcon />
                  </Button>
                </LightTooltip>
                <LightTooltip title="So sánh">
                  <Button
                    variant="outlined"
                    sx={{ minWidth: '40px', height: '52px', borderColor: '#f1f1f1', gap: '5px' }}
                  >
                    <ComprareIcon />
                  </Button>
                </LightTooltip>
              </Box>
              <Box sx={{ display: 'flex', gap: '30px', fontWeight: 600 }}>
                <List>
                  <ListItem sx={{ mb: '5px', gap: '5px', paddingLeft: 0 }}>
                    Type: <span style={{ color: '#3BB77E' }}>Origanic</span>
                  </ListItem>
                  <ListItem sx={{ mb: '5px', gap: '5px', paddingLeft: 0 }}>
                    MFG: <span style={{ color: '#3BB77E' }}>30/06/2023</span>
                  </ListItem>
                  <ListItem sx={{ mb: '5px', gap: '5px', paddingLeft: 0 }}>
                    LIFE: <span style={{ color: '#3BB77E' }}>70 ngày</span>
                  </ListItem>
                </List>
                <List>
                  <ListItem sx={{ mb: '5px', gap: '5px', paddingLeft: 0 }}>
                    SKU: <span style={{ color: '#3BB77E' }}>FWM15VKT</span>
                  </ListItem>
                  <ListItem sx={{ mb: '5px', gap: '5px', paddingLeft: 0 }}>
                    Tags: <span style={{ color: '#3BB77E' }}>Snack, Organic, Brown</span>
                  </ListItem>
                  <ListItem sx={{ mb: '5px', gap: '5px', paddingLeft: 0 }}>
                    Stock: <span style={{ color: '#3BB77E' }}>18 sản phẩm</span>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" spacing={5} columns={{ xs: 4, lg: 8 }} sx={{ my: '20px' }}>
          <Grid item xs={4} sm={4} md={6}>
            <TabsDesc />
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
                <SimilarProduct />
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
              {trending.slice(0, 4).map((item) => (
                <Stack key={item.id} sx={{ margin: '10px 0' }}>
                  <ProductHorizontalItem product={item} />
                </Stack>
              ))}
            </Box>
            <Box sx={{ mt: '20px' }}>
              <Paper
                sx={{
                  height: 307,
                  maxWidth: 506,
                  borderRadius: '20px',
                  backgroundImage: `url('/images/assets/banner-11.png')`,
                  backgroundPosition: 'right',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  transition: '0.2s ease-in-out',
                  padding: '20px',
                  ':hover': {
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Typography color={'#adadad'} fontSize={'14px'} fontWeight={700}>
                    Orangic
                  </Typography>
                  <Typography color={'#253D4E'} fontSize={'24px'} fontWeight={700} sx={{ cursor: 'default' }}>
                    Tiết kiệm 17%
                  </Typography>
                </Box>
              </Paper>
            </Box>
            <Box sx={{ mt: '20px' }}>
              <Paper
                sx={{
                  height: 307,
                  maxWidth: 506,
                  borderRadius: '20px',
                  backgroundImage: `url('/images/assets/banner-12.jpeg')`,
                  backgroundPosition: 'right',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  transition: '0.2s ease-in-out',
                  padding: '20px',
                  ':hover': {
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    top: '5%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <Typography color={'#adadad'} fontSize={'14px'} fontWeight={700}>
                    Rau củ quả giảm 10%
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

ProductDetail.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default ProductDetail;
