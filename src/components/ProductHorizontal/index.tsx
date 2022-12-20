import { Box, Grid, Typography, BoxProps, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { ProductType } from 'src/types/product';
import { cardProductData } from '../TabProducts/data';
import { ProductHorizontalItem } from './ProductHorizontalItem';

import { sortBy } from 'lodash';

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

const ProductHorizontal = () => {
  const [selling, setSelling] = useState<ProductType[]>(cardProductData.filter((item) => item.isHot) || []);
  const [trending, setTrending] = useState<ProductType[]>(cardProductData.filter((item) => item.isNew) || []);
  const [recentlyAdded, setRecentlyAdded] = useState<ProductType[]>(cardProductData.filter((item) => item.isHot) || []);
  const [topRated, setTopRated] = useState<ProductType[]>(sortBy(cardProductData, 'rating').reverse() || []);

  const listProductHorizontal = [
    { id: 1, title: 'Bán chạy nhất', products: selling },
    { id: 2, title: 'Sản phẩm thịnh hành', products: trending },
    { id: 3, title: 'Sản phẩm mới', products: recentlyAdded },
    { id: 4, title: 'Sản phẩm xếp hạng cao', products: topRated },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '44px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, xl: 16 }}>
        {listProductHorizontal.map((item) => (
          <Grid
            key={item.id}
            item
            xs={4}
            sm={4}
            md={4}
            xl={4}
            sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
          >
            <Box sx={{}} key={item.id}>
              <ProductItemWrapper>
                <Typography
                  color={'#253D4E'}
                  fontSize={'24px'}
                  fontWeight={700}
                  sx={{
                    height: '40px',
                  }}
                >
                  {item.title}
                </Typography>
              </ProductItemWrapper>
              <Box sx={{ mt: '30px' }}>
                {item.products.slice(0, 3).map((item) => (
                  <Stack key={item.id} sx={{ margin: '10px 0' }}>
                    <ProductHorizontalItem product={item} />
                  </Stack>
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductHorizontal;
