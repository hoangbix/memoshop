import { ProductCard } from './ProductCard';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import { FilterProduct } from './FilterProduct';

const items = [
  {
    id: 1,
    name: 'Seeds of Change Hạt diêm mạch hữu cơ, gạo lứt và gạo đỏ',
    star: 5,
    image: 'images/assets/product-1-1.jpg',
    category: 1,
    to: '/',
    price: 435000,
    oldPrice: 450000,
    discount: 15,
  },
  {
    id: 2,
    name: 'Thịt gà viên kiểu Ý hoàn toàn tự nhiên',
    star: 5,
    image: 'images/assets/product-2-1.jpg',
    category: 1,
    to: '/',
    price: 435000,
    oldPrice: 450000,
    discount: 15,
  },
];

const SortProduct = () => {
  const [popular, setPopular] = useState(items);
  const [filtered, setFiltered] = useState(items);
  const [activeGener, setActiveGener] = useState(0);

  const filterHandler = () => {};

  return (
    <Box sx={{ mt: '44px' }}>
      <FilterProduct filterHandler={filterHandler} />
      <Grid item xs={16}>
        <Grid container justifyContent="center" spacing={3} sx={{ gap: '20px' }}>
          {popular.map((item, i) => {
            return (
              <Box key={item.id} component={motion.div} layout>
                <ProductCard key={item.id} data={item} />
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SortProduct;
