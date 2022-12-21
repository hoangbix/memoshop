import { useState } from 'react';
import { motion } from 'framer-motion';
import TabFilter from './TabFilter';
import { CardProduct } from './CardProduct';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { cardProductData } from './data';
import { ListTabProductsType, ProductType } from 'src/types/product';

const listTabProducts: ListTabProductsType[] = [
  { category: 'all', to: '/', id: 1, name: 'Tất cả' },
  { category: 'rau-cu', to: '/', id: 2, name: 'Rau củ' },
  { category: 'thit-ca', to: '/', id: 3, name: 'Thịt cá' },
  { category: 'do-kho', to: '/', id: 4, name: 'Đồ khô' },
  { category: 'trai-cay', to: '/', id: 5, name: 'Trái cây' },
];

const TabProducts = () => {
  const [filteredItems, setFilteredItems] = useState<ProductType[]>(cardProductData || []);

  const handleFilter = (i: string) => {
    if (i === 'all') return setFilteredItems(cardProductData);

    setFilteredItems(cardProductData.filter((index) => index.category === i));
  };

  return (
    <Box sx={{ mb: '44px', padding: { xs: '10px', lg: '' } }}>
      <TabFilter onFilter={handleFilter} data={listTabProducts} title={'Sản phẩm phổ biến'} />
      <Box sx={{ mt: '44px' }}>
        <Grid item xs={3}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 8, md: 12, xl: 16, xxl: 20 }}>
            {filteredItems.slice(0, 10).map((prod) => (
              <Grid
                key={prod.id}
                item
                xs={4}
                md={4}
                xl={4}
                xxl={4}
                sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
              >
                <Box
                  component={motion.div}
                  layout
                  initial={{ transform: 'scale(0)' }}
                  animate={{ transform: 'scale(1)' }}
                  exit={{ transform: 'scale(0)' }}
                  style={{ overflow: 'hidden' }}
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
