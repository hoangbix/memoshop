import { useState } from 'react';
import { motion } from 'framer-motion';
import TabFilter from './TabFilter';
import { CardProduct } from './CardProduct';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ListTabProductsType, ProductType } from 'src/types/product';

const listTabProducts: ListTabProductsType[] = [
  { id: 1, name: 'Tất cả' },
  { id: 2, name: 'Rau củ' },
  { id: 3, name: 'Thịt cá' },
  { id: 4, name: 'Đồ khô' },
  { id: 5, name: 'Trái cây' },
];

const TabProducts = ({ data }: { data: ProductType[] }) => {
  const [filteredItems, setFilteredItems] = useState<ProductType[]>(data);

  const handleFilter = (i: string) => {
    if (i === 'Tất cả') return setFilteredItems(data);

    setFilteredItems(data.filter((index) => index.category === i));
  };

  return (
    <Box sx={{ mb: '44px', padding: { xs: '10px', lg: '' } }}>
      <TabFilter onFilter={handleFilter} data={listTabProducts} title={'Sản phẩm phổ biến'} />
      <Box sx={{ mt: '44px' }}>
        <Grid item xs={3}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, md: 12, lg: 16, xl: 20 }}>
            {filteredItems.slice(0, 10).map((prod) => (
              <Grid key={prod._id} item xs={4} sx={{ padding: '5px 2px !important' }}>
                <Box
                  component={motion.div}
                  layout
                  initial={{ transform: 'scale(0)' }}
                  animate={{ transform: 'scale(1)' }}
                  exit={{ transform: 'scale(0)' }}
                  style={{ overflow: 'hidden' }}
                  sx={{ mx: '5px' }}
                >
                  <CardProduct data={prod} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TabProducts;
