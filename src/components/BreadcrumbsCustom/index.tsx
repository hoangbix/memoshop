import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Box, Link as MuiLink } from '@mui/material';
import { BiHome } from 'react-icons/bi';
import Link from 'next/link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const BreadcrumbsCustom = () => {
  return (
    <Box sx={{ height: 65, display: 'flex', alignItems: 'center', borderBottom: '1px solid #cccccc80' }}>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <MuiLink
            component={Link}
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="#3BB77E !important"
            fontWeight={600}
            href="/"
          >
            <BiHome />
            Trang chủ
          </MuiLink>
          <MuiLink
            component={Link}
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="#3BB77E !important"
            fontWeight={600}
            href="/"
          >
            Chi tiết
          </MuiLink>
          <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
            Bắp cải xanh
          </Typography>
        </Breadcrumbs>
      </div>
    </Box>
  );
};
