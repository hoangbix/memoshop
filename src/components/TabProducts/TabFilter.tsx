import { useState, SyntheticEvent } from 'react';
import { motion } from 'framer-motion';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const listTabProducts = [
  { category: 'all', to: '/', id: 1, name: 'Tất cả' },
  { category: 'rau-cu', to: '/', id: 2, name: 'Rau củ' },
  { category: 'thit-ca', to: '/', id: 3, name: 'Thịt cá' },
  { category: 'do-kho', to: '/', id: 4, name: 'Đồ khô' },
  { category: 'trai-cay', to: '/', id: 5, name: 'Trái cây' },
];

const TabFilter = ({ onFilter }: { onFilter: (i: any) => void }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const listVariants = {
    collapse: { width: 0 },
    expand: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    collapse: { opacity: 0 },
    expand: { opacity: 1 },
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '30px' }}>
      <Typography color={'#253D4E'} fontSize={'32px'} fontWeight={700}>
        Sản phẩm phổ biến
      </Typography>
      <Box
        component={motion.div}
        variants={listVariants}
        animate={'expand'}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
        >
          {listTabProducts.map((item, i) => {
            return (
              <Tab
                key={i}
                component={motion.div}
                label={item.name}
                variants={itemVariants}
                onClick={() => onFilter(item.category)}
                sx={{ fontWeight: 700, color: '#253D4E', fontSize: '16px', textTransform: 'none' }}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
};

export default TabFilter;
