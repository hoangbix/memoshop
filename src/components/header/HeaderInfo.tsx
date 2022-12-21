import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Link as MuiLink } from '@mui/material';
import Link from 'next/link';

export const HeaderInfo = () => {
  return (
    <List sx={{ width: { xs: '50%', xl: '30%' }, bgcolor: 'transparent', display: 'flex', padding: 0 }}>
      <ListItem alignItems="center" sx={{ padding: '5px 10px' }}>
        <ListItemText>
          <MuiLink component={Link} href={'/about'} sx={{ fontSize: '14px' }}>
            Liên hệ
          </MuiLink>
        </ListItemText>
      </ListItem>
      <Divider orientation="vertical" variant="middle" flexItem />
      <ListItem alignItems="center" sx={{ padding: '5px 10px' }}>
        <ListItemText>
          <MuiLink component={Link} href={'/about'} sx={{ fontSize: '14px' }}>
            Tài khoản
          </MuiLink>
        </ListItemText>
      </ListItem>
      <Divider orientation="vertical" variant="middle" flexItem />
      <ListItem alignItems="center" sx={{ padding: '5px 10px' }}>
        <ListItemText>
          <MuiLink component={Link} href={'/about'} sx={{ fontSize: '14px' }}>
            Yêu thích
          </MuiLink>
        </ListItemText>
      </ListItem>
      <Divider orientation="vertical" variant="middle" flexItem />
      <ListItem sx={{ padding: '5px 10px' }}>
        <ListItemText>
          <MuiLink component={Link} href={'/about'} sx={{ fontSize: '14px' }}>
            Đơn hàng
          </MuiLink>
        </ListItemText>
      </ListItem>
    </List>
  );
};
