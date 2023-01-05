import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Box, Link as MuiLink } from '@mui/material';
import { BiHome } from 'react-icons/bi';
import Link from 'next/link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export const BreadcrumbsCustom = ({ title }: { title?: string }) => {
  return (
    <Box sx={{ height: 65, display: 'flex', alignItems: 'center' }}>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb" separator="›">
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
            Sản phẩm
          </MuiLink>
          {title ? (
            <Typography sx={{ display: 'flex', alignItems: 'center' }} color="text.primary">
              {title}
            </Typography>
          ) : null}
        </Breadcrumbs>
      </div>
    </Box>
  );
};
