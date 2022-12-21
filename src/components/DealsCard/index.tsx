import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { BiChevronsRight } from 'react-icons/bi';
import { DealsCardItem } from './DealsCardItem';

const DealsCard = () => {
  return (
    <Box sx={{ mb: '44px' }}>
      <Box sx={{ display: { sx: 'block', lg: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography color={'#253D4E'} fontSize={{ xs: '24px', md: '32px' }} fontWeight={700}>
          Ưu đãi chào năm mới
        </Typography>
        <Button
          component={Link}
          href={'/'}
          sx={{ fontSize: '16px', textTransform: 'none', color: '#3BB77E !important', fontWeight: 600 }}
          endIcon={<BiChevronsRight />}
        >
          Xem tất cả ưu đãi
        </Button>
      </Box>
      <DealsCardItem />
    </Box>
  );
};

export default DealsCard;
