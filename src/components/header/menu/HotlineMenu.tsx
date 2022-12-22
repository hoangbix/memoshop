import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import HotlineIcon from 'src/images/icons/icon-headphone.svg';

export const HotlineMenu = () => {
  return (
    <Box sx={{ display: { xs: 'none', xl: 'flex' }, alignItems: 'center', gap: '10px' }}>
      <HotlineIcon />
      <Box>
        <Typography sx={{ fontSize: '26px', color: '#3BB77E', fontWeight: 700 }}>
          <Link href={'tel:1900888'}>1900 - 888</Link>
        </Typography>
        <Typography sx={{ fontSize: '12px' }}>Hỗ trợ 24/7</Typography>
      </Box>
    </Box>
  );
};
