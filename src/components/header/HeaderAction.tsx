import { Badge, Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

import ComprareIcon from 'src/images/icons/compare.svg';
import HeartIcon from 'src/images/icons/icon-heart.svg';
import CartIcon from 'src/images/icons/icon-cart.svg';
import UserIcon from 'src/images/icons/icon-user.svg';

export const HeaderAction = () => {
  return (
    <Box sx={{ width: { xs: 'auto', lg: '35%' }, display: 'flex', justifyContent: 'right', gap: '5px' }}>
      <Button sx={{ gap: '5px', display: { xs: 'none', lg: 'flex' } }}>
        <Badge badgeContent={4} color="primary">
          <ComprareIcon />
        </Badge>
        <Typography sx={{ fontSize: '16px', mt: '10px' }}>So sánh</Typography>
      </Button>
      <Button sx={{ gap: '5px' }}>
        <Badge badgeContent={4} color="primary">
          <HeartIcon />
        </Badge>
        <Typography sx={{ fontSize: '16px', mt: '10px', display: { xs: 'none', lg: 'flex' } }}>Yêu thích</Typography>
      </Button>
      <Button sx={{ gap: '5px' }}>
        <Badge badgeContent={4} color="primary">
          <CartIcon />
        </Badge>
        <Typography sx={{ fontSize: '16px', mt: '10px', display: { xs: 'none', lg: 'flex' } }}>Giỏ hàng</Typography>
      </Button>
      <Button sx={{ gap: '5px', display: { xs: 'none', lg: 'flex' } }}>
        <Badge color="primary">
          <UserIcon />
        </Badge>
        <Typography sx={{ fontSize: '16px', mt: '10px' }}>Tài khoản</Typography>
      </Button>
    </Box>
  );
};
