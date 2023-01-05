import { Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { PaginationLink } from '../PaginationLink';
import { CardProduct } from '../TabProducts/CardProduct';
import { cardProductData } from '../TabProducts/data';

export const ListProduct = () => {
  return (
    <Box>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 8, lg: 12, xl: 16, xxl: 20 }}>
        {cardProductData.slice(0, 15).map((prod) => (
          <Grid
            key={prod._id}
            item
            xs={4}
            md={4}
            lg={4}
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
      <Box sx={{ mt: '40px' }}>
        <PaginationLink />
      </Box>
    </Box>
  );
};
