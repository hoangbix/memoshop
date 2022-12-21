import { Box, Grid, Typography } from '@mui/material';

import Service1 from 'src/images/icons/service-1.svg';
import Service2 from 'src/images/icons/service-2.svg';
import Service3 from 'src/images/icons/service-3.svg';
import Service5 from 'src/images/icons/service-5.svg';

const listService = [
  { title: 'Giá & ưu đãi tốt nhất', desc: 'Đơn hàng 500k trở lên', icon: Service1 },
  { title: 'Giao hàng miễn phí', desc: 'Dịch vụ tuyệt vời 24/7', icon: Service2 },
  { title: 'Thỏa thuận tuyệt vời', desc: 'Áp dụng khi đăng ký mới', icon: Service3 },
  { title: 'Trả lại dễ dàng', desc: 'Trong vòng 24 tiếng', icon: Service5 },
];

const ServiceFooter = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '44px' }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 8, xl: 12, xxl: 16 }}>
        {listService.map((item, i) => {
          const Icon = item.icon;
          return (
            <Grid
              key={i}
              item
              xs={4}
              sm={4}
              md={4}
              xl={4}
              sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: 112,
                  maxHeight: '100%',
                  padding: '20px',
                  backgroundColor: '#d2ebe052',
                  borderRadius: '10px',
                }}
              >
                <Box sx={{ marginRight: '20px' }}>
                  <Icon />
                </Box>
                <Box>
                  <Typography color="#242424" fontSize={'18px'} fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography>{item.desc}</Typography>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ServiceFooter;
