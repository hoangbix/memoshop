import { useState } from 'react';
import { motion } from 'framer-motion';
import TabFilter from './TabFilter';
import { CardProduct } from './CardProduct';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { cardProductData } from './data';
import { ProductType } from 'src/types/product';

const TabProducts = () => {
  const [filteredItems, setFilteredItems] = useState<ProductType[]>(cardProductData || []);

  const handleFilter = (i: string) => {
    if (i === 'all') return setFilteredItems(cardProductData);

    setFilteredItems(cardProductData.filter((index) => index.category === i));
  };

  return (
    <>
      <TabFilter onFilter={handleFilter} />
      <Box sx={{ mt: '44px' }}>
        <Grid item xs={16}>
          <Grid container justifyContent="center" spacing={3} sx={{ gap: '25px' }}>
            {filteredItems.slice(0, 10).map((prod) => (
              <Box
                key={prod.id}
                component={motion.div}
                layout
                initial={{ transform: 'scale(0)' }}
                animate={{ transform: 'scale(1)' }}
                exit={{ transform: 'scale(0)' }}
                style={{ overflow: 'hidden' }}
              >
                <CardProduct data={prod} />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default TabProducts;
