import { Box, Chip, Grid, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { BreadcrumbsCustom } from 'src/components/BreadcrumbsCustom';
import DefaultLayout from 'src/layouts/DefaultLayout';
import { IoIosClose } from 'react-icons/io';
import { SelectChangeEvent } from '@mui/material/Select';
import { FilterProduct } from 'src/components/FilterProduct';
import { ListProduct } from 'src/components/ListProduct';

const ListProductPage = () => {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ my: '30px' }}>
      {/******** Header *********** */}
      <Box
        sx={{
          background: "url('/images/assets/header-bg.png') no-repeat center center",
          backgroundSize: 'cover',
          width: '100%',
          height: 237,
          padding: '70px 80px',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '30px',
        }}
      >
        <Box>
          <Typography variant="h4" color={'#253D4E'} fontWeight={700}>
            Cửa hàng
          </Typography>
          <BreadcrumbsCustom />
        </Box>
        <Box>
          <Chip
            sx={{
              mr: '10px',
              backgroundColor: '#fff',
              color: '#3BB77E',
              borderColor: '#3BB77E',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            icon={<IoIosClose color={'#3BB77E'} />}
            label="Thịt cá"
            variant="outlined"
          />
          <Chip
            sx={{
              mr: '10px',
              backgroundColor: '#fff',
              color: '#3BB77E',
              borderColor: '#3BB77E',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            icon={<IoIosClose color={'#3BB77E'} />}
            label="Rau xanh"
            variant="outlined"
          />
          <Chip
            sx={{
              mr: '10px',
              backgroundColor: '#fff',
              color: '#3BB77E',
              borderColor: '#3BB77E',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            icon={<IoIosClose color={'#3BB77E'} />}
            label="Trái cây"
            variant="outlined"
          />
          <Chip
            sx={{
              mr: '10px',
              backgroundColor: '#fff',
              color: '#3BB77E',
              borderColor: '#3BB77E',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            icon={<IoIosClose color={'#3BB77E'} />}
            label="Đồ đóng gói"
            variant="outlined"
          />
          <Chip
            sx={{
              mr: '10px',
              backgroundColor: '#fff',
              color: '#3BB77E',
              borderColor: '#3BB77E',
              fontWeight: 700,
              cursor: 'pointer',
            }}
            icon={<IoIosClose color={'#3BB77E'} />}
            label="Hải sản"
            variant="outlined"
          />
        </Box>
      </Box>

      {/******** Title *********** */}
      <Box sx={{ mb: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography color={'#7E7E7E'} fontSize={'14px'}>
          Tìm thấy <span style={{ color: '#3BB77E', fontWeight: 600 }}>50</span> sản phẩm
        </Typography>
      </Box>

      {/******** Body *********** */}
      <Grid container justifyContent="space-between" spacing={5} columns={{ xs: 4, lg: 10 }}>
        <Grid item xs={4} sm={4} md={2}>
          <FilterProduct />
        </Grid>
        <Grid item xs={4} sm={4} md={8}>
          <ListProduct />
        </Grid>
      </Grid>
    </Box>
  );
};

ListProductPage.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

export default ListProductPage;
