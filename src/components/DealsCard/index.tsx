import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import { BiChevronsRight } from 'react-icons/bi';
import { DealsCardItem } from './DealsCardItem';

const DealsCard = ({ isDetail }: { isDetail?: boolean }) => {
  return (
    <Box sx={{ mb: '44px' }}>
      <Box sx={{ display: { xs: 'block', lg: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
          color={'#253D4E'}
          fontSize={!isDetail ? { xs: '24px', md: '32px' } : { xs: '20px', md: '24px' }}
          fontWeight={700}
        >
          Ưu đãi chào năm mới
        </Typography>
        <Button
          component={Link}
          href={'/'}
          sx={{
            fontSize: isDetail ? '14px' : '16px',
            textTransform: 'none',
            color: '#3BB77E !important',
            fontWeight: 600,
          }}
          endIcon={<BiChevronsRight />}
        >
          Xem tất cả ưu đãi
        </Button>
      </Box>
      <DealsCardItem isDetail />
    </Box>
  );
};

export default DealsCard;
