import { Fragment } from 'react';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { AiOutlineSearch } from 'react-icons/ai';
import { Box } from '@mui/system';
import LogoIcon from 'src/images/icons/logo.svg';
import Link from 'next/link';
import { Button } from '@mui/material';

export const HeaderSearch = () => {
  return (
    <Fragment>
      <Box sx={{ display: { xs: 'block', lg: 'none' }, minWidth: '120px', justifyContent: 'center' }}>
        <Link href={'/'}>
          <LogoIcon />
        </Link>
      </Box>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          alignItems: 'center',
          borderRadius: '5px',
          boxShadow: 'none',
          border: '2px solid #3BB77E90',
          flex: 1,
          display: { xs: 'none', lg: 'flex' },
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Nhập để tìm kiếm sản phẩm..." />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search"></IconButton>
        <Divider sx={{ height: 28, m: 0.5, background: '#3BB77E90' }} orientation="vertical" />
        <Button sx={{ p: '10px' }} aria-label="directions">
          <AiOutlineSearch fontSize={'28px'} />
        </Button>
      </Paper>
    </Fragment>
  );
};
