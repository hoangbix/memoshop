import { Box, Typography, BoxProps, FormGroup, FormControlLabel, Checkbox, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import { CiFilter } from 'react-icons/ci';
import { ProductType } from 'src/types/product';
import { FillByPrice } from '../FillByPrice';
import { OrganicBanner } from '../OragicBanner';
import { ProductHorizontalItem } from '../ProductHorizontal/ProductHorizontalItem';

import { FilterProductCategory } from './FilterProductCategory';

const ProductItemWrapper = styled(Box)<BoxProps>(() => ({
  mb: '30px',
  borderBottom: '1px solid #cccccc50',
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

export const FilterProduct = ({ data }: { data: ProductType[] }) => {
  const trending = data.filter((item) => item.isNew);

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '10px',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          borderRadius: '10px',
          mb: '20px',
        }}
      >
        <ProductItemWrapper>
          <Typography
            color={'#253D4E'}
            fontSize={'20px'}
            fontWeight={700}
            sx={{
              height: '40px',
            }}
          >
            Danh mục
          </Typography>
        </ProductItemWrapper>
        <Box sx={{ mt: '10px' }}>
          <FilterProductCategory />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: '10px',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          borderRadius: '10px',
          mb: '20px',
        }}
      >
        <ProductItemWrapper>
          <Typography
            color={'#253D4E'}
            fontSize={'20px'}
            fontWeight={700}
            sx={{
              height: '40px',
            }}
          >
            Lọc theo giá
          </Typography>
        </ProductItemWrapper>
        <Box sx={{ mt: '10px' }}>
          <FillByPrice />
        </Box>
        <Box sx={{ mt: '20px' }}>
          <Typography color={'#253D4E'} fontSize={'14px'} fontWeight={700}>
            Tình trạng
          </Typography>
          <FormGroup sx={{ mt: '10px' }}>
            <FormControlLabel sx={{ height: '25px' }} control={<Checkbox size="small" defaultChecked />} label="Mới" />
            <FormControlLabel sx={{ height: '25px' }} control={<Checkbox size="small" />} label="Khuyến mãi" />
            <FormControlLabel sx={{ height: '25px' }} control={<Checkbox size="small" />} label="Hàng qua ngày" />
          </FormGroup>
          <Button variant="contained" size="small" startIcon={<CiFilter />} sx={{ my: '15px', borderRadius: '3px' }}>
            Lọc
          </Button>
        </Box>
      </Box>
      {trending.length ? (
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: '10px',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
            borderRadius: '10px',
            mb: '20px',
          }}
        >
          <ProductItemWrapper>
            <Typography
              color={'#253D4E'}
              fontSize={'20px'}
              fontWeight={700}
              sx={{
                height: '40px',
              }}
            >
              Sản phẩm mới
            </Typography>
          </ProductItemWrapper>
          {trending.slice(0, 4).map((item) => (
            <Stack key={item._id} sx={{ margin: '10px 0' }}>
              <ProductHorizontalItem product={item} isDetail />
            </Stack>
          ))}
        </Box>
      ) : null}
      <Box sx={{ mb: '20px', width: '100%', display: { xs: 'none', xl: 'block' } }}>
        <OrganicBanner />
      </Box>
    </Box>
  );
};
