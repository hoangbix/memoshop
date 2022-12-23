/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Link as MuiLink } from '@mui/material';

import { BiHomeAlt, BiChevronDown } from 'react-icons/bi';
import List from '@mui/material/List';

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    maxWidth: 'none',
  },
}));

const fruits = [
  { name: 'Rau sạch', to: '/' },
  { name: 'Các loại hạt', to: '/' },
  { name: 'Thịt & Gia cầm', to: '/' },
  { name: 'Các loại thảo mộc', to: '/' },
  { name: 'Sản phẩm đóng gói', to: '/' },
  { name: 'Trái cây & Rau xanh', to: '/' },
];

const breakfast = [
  { name: 'Mứt sữa', to: '/' },
  { name: 'Phô mai', to: '/' },
  { name: 'Kem chua', to: '/' },
  { name: 'Trứng đánh sữa', to: '/' },
  { name: 'Bơ và Margarine', to: '/' },
  { name: 'Sữa & hương vị sữa', to: '/' },
];

const meats = [
  { name: 'Thịt gà', to: '/' },
  { name: 'Xúc xích gà', to: '/' },
  { name: 'Thịt nguội cắt lát', to: '/' },
  { name: ' Xúc xích nhập khẩu', to: '/' },
  { name: 'Cua & động vật có vỏ', to: '/' },
  { name: 'Phi lê đánh bắt tự nhiên', to: '/' },
];

export const MainMenu = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
        <Typography
          color={'#3BB77E'}
          fontWeight={700}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}
        >
          <BiHomeAlt fontSize={'20px'} />
          <Link href={'/'}>Trang chủ</Link>
        </Typography>
        <HtmlTooltip
          open={true}
          title={
            <Fragment>
              <Box
                sx={{
                  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                  backgroundColor: 'rgba(255, 255, 255)',
                  borderRadius: '5px',
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '50px',
                  minHeight: '300px',
                }}
              >
                <Box sx={{ width: '100%' }}>
                  <List
                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                      <Typography color={'#3BB77E'} fontSize={'16px'} fontWeight={600}>
                        Rau quả
                      </Typography>
                    }
                  >
                    {fruits.map((item, i) => (
                      <ListItemText key={i}>
                        <MuiLink
                          component={Link}
                          href={item.to}
                          sx={{ fontSize: '15px', color: '#7E7E7E', fontWeight: 700 }}
                        >
                          {item.name}
                        </MuiLink>
                      </ListItemText>
                    ))}
                  </List>
                </Box>
                <List
                  sx={{ width: '100%', bgcolor: 'background.paper' }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <Typography color={'#3BB77E'} fontSize={'16px'} fontWeight={600}>
                      Bữa sáng với sữa
                    </Typography>
                  }
                >
                  {breakfast.map((item, i) => (
                    <ListItemText key={i}>
                      <MuiLink
                        component={Link}
                        href={item.to}
                        sx={{ fontSize: '15px', color: '#7E7E7E', fontWeight: 700 }}
                      >
                        {item.name}
                      </MuiLink>
                    </ListItemText>
                  ))}
                </List>
                <List
                  sx={{ width: '100%', bgcolor: 'background.paper' }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <Typography color={'#3BB77E'} fontSize={'16px'} fontWeight={600}>
                      Thịt & hải sản
                    </Typography>
                  }
                >
                  {meats.map((item, i) => (
                    <ListItemText key={i}>
                      <MuiLink
                        component={Link}
                        href={item.to}
                        sx={{ fontSize: '15px', color: '#7E7E7E', fontWeight: 700 }}
                      >
                        {item.name}
                      </MuiLink>
                    </ListItemText>
                  ))}
                </List>
                <Box sx={{ display: { xs: 'none', lg: 'flex' }, width: '100%' }}>
                  <img
                    src={'https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png'}
                    width={'508px'}
                    height={'100%'}
                    alt={'Banner Menu'}
                    style={{ borderRadius: '20px' }}
                  />
                </Box>
              </Box>
            </Fragment>
          }
        >
          <Typography
            fontWeight={700}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ':hover': {
                color: '#3BB77E',
              },
            }}
          >
            <Link href={'/san-pham'}>Cửa hàng</Link>
            <BiChevronDown fontSize={'20px'} />
          </Typography>
        </HtmlTooltip>

        <Typography
          fontWeight={700}
          sx={{
            ':hover': {
              color: '#3BB77E',
            },
          }}
        >
          <Link href={'/'}>Về chúng tôi</Link>
        </Typography>
        <Typography
          fontWeight={700}
          sx={{
            ':hover': {
              color: '#3BB77E',
            },
          }}
        >
          <Link href={'/'}>Tin tức & Mẹo</Link>
        </Typography>
        <Typography
          fontWeight={700}
          sx={{
            ':hover': {
              color: '#3BB77E',
            },
          }}
        >
          <Link href={'/'}>Liên hệ</Link>
        </Typography>
      </Box>
    </>
  );
};
