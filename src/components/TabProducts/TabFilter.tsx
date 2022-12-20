import { useState, SyntheticEvent } from 'react';
import { motion } from 'framer-motion';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ListTabProductsType } from 'src/types/product';

interface Props {
  onFilter: (i: string) => void;
  data: ListTabProductsType[];
  title: string;
}

const TabFilter = ({ onFilter, data, title }: Props) => {
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
    <Box
      sx={{
        display: { sx: 'inline-bock', md: 'flex' },
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: '30px',
        width: '100%',
      }}
    >
      <Typography color={'#253D4E'} fontSize={{ xs: '24px', md: '32px' }} fontWeight={700}>
        {title}
      </Typography>
      <Box
        component={motion.div}
        variants={listVariants}
        animate={'expand'}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons="auto"
          centered
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
        >
          {data.map((item: ListTabProductsType) => {
            return (
              <Tab
                key={item.id}
                component={motion.div}
                label={item.name}
                variants={itemVariants}
                onClick={() => onFilter(item.category)}
                sx={{ fontWeight: 700, color: '#253D4E', fontSize: { xs: '14px', md: '16px' }, textTransform: 'none' }}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
};

export default TabFilter;
