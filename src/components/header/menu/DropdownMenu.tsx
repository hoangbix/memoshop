import { Box, Button, Container, Popover } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { FiChevronDown, FiGrid, FiChevronUp } from 'react-icons/fi';

import Category1 from 'src/images/icons/category-1.svg';
import Category2 from 'src/images/icons/category-2.svg';
import Category3 from 'src/images/icons/category-3.svg';
import Category4 from 'src/images/icons/category-4.svg';
import Category5 from 'src/images/icons/category-5.svg';
import Category6 from 'src/images/icons/category-6.svg';
import Category7 from 'src/images/icons/category-7.svg';
import Category8 from 'src/images/icons/category-8.svg';
import Category10 from 'src/images/icons/category-10.svg';
import Link from 'next/link';
import Stack from '@mui/material/Stack';

const listMenuLeft = [
  { icon: Category6, to: '/', name: 'Sản phẩm từ sữa' },
  { icon: Category2, to: '/', name: 'Rượu & Đồ uống' },
  { icon: Category3, to: '/', name: 'Quần áo & làm đẹp' },
  { icon: Category10, to: '/', name: 'Hải sản tươi sống' },
  { icon: Category7, to: '/', name: 'Hoa quả tươi' },
  { icon: Category5, to: '/', name: 'Bánh mì & trái cây' },
];

const listMenuRight = [
  { icon: Category4, to: '/', name: 'Cửa hàng Thú cưng' },
  { icon: Category5, to: '/', name: 'Thức ăn nhanh' },
  { icon: Category1, to: '/', name: 'Nguyên liệu làm bánh' },
  { icon: Category8, to: '/', name: 'Rau xanh' },
  { icon: Category3, to: '/', name: 'Quần áo & làm đẹp' },
  { icon: Category2, to: '/', name: 'Hải sản tươi sống' },
];

export const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Container
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '30px',
        }}
      >
        <Button
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          sx={{
            width: '255px',
            height: '44px',
            borderRadius: '5px',
            fontWeight: 700,
            ':hover': {
              backgroundColor: '#3BB77E',
            },
          }}
          startIcon={<FiGrid />}
          endIcon={!open ? <FiChevronDown /> : <FiChevronUp />}
        >
          Danh Mục Sản Phẩm
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          PaperProps={{
            sx: {
              borderRadius: '5px',
              border: '1px solid #3BB77E80',
              minWidth: '255px',
              mt: '5px',
              boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
              padding: '30px',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              '& > *': {
                m: 1,
              },
            }}
          >
            <Stack spacing={4}>
              {listMenuLeft.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={i}
                    sx={{ borderColor: '#cccccc50', minWidth: '204px', display: 'flex', justifyContent: 'left' }}
                    variant="outlined"
                    startIcon={<Icon width={'30px'} height={'30px'} />}
                  >
                    <Link href={item.to}>{item.name}</Link>
                  </Button>
                );
              })}
            </Stack>
            <Stack spacing={4}>
              {listMenuRight.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={i}
                    sx={{ borderColor: '#cccccc50', minWidth: '204px', display: 'flex', justifyContent: 'left' }}
                    variant="outlined"
                    startIcon={<Icon width={'30px'} height={'30px'} />}
                  >
                    <Link href={item.to}>{item.name}</Link>
                  </Button>
                );
              })}
            </Stack>
          </Box>
        </Popover>
      </Container>
    </Box>
  );
};
