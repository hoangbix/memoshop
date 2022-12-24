import { Avatar, Box, Button, Grid, MobileStepper, Rating, TextField, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
import RatingCustom from 'src/components/RatingCustom';
import { TbSend } from 'react-icons/tb';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export const ReviewDetail = () => {
  return (
    <Box>
      <Grid container justifyContent="space-between" spacing={5} columns={{ xs: 4, lg: 8 }}>
        <Grid item xs={4} md={6}>
          <Typography color={'#2a2a2a'} fontSize={'18px'} fontWeight={700}>
            Nhận xét của khách hàng
          </Typography>
          <Card
            sx={{
              display: 'flex',
              backgroundColor: 'transparent',
              boxShadow: 'none',
              border: '1px solid #f2f2f2',
              mb: '30px',
            }}
          >
            <Box sx={{ display: 'flex', width: '100%' }}>
              <CardContent sx={{ display: 'flex', width: '100%', gap: '10px' }}>
                <Box sx={{ width: '20%' }}>
                  <Avatar
                    {...stringAvatar('Đoan Dung')}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqybUg787WzRWBUU4wEvrPNEf7MkcgAJXiLQ&usqp=CAU"
                    sx={{ width: { xs: 50, md: 80 }, height: { xs: 50, md: 80 } }}
                  />
                  <Typography color="#3BB789" fontSize={'14px'} fontWeight={700}>
                    Đoan Dung
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      pb: '10px',
                      borderBottom: '1px solid #cccccc50',
                    }}
                  >
                    <Typography color={'B6B6B6'} fontSize={'13px'}>
                      Vào lúc: 17:19:47 - 12/12/2022
                    </Typography>
                    <Rating
                      sx={{ fontSize: '15px' }}
                      name="half-rating-read"
                      defaultValue={5}
                      precision={0.5}
                      readOnly
                    />
                  </Box>
                  <Typography sx={{ mt: '10px' }} fontSize={'14px'}>
                    Lorem ipsum dolor sit amet, consectetur adipisizing elit. Delectus, suscipit exerciteem accusantium
                    obcaecati quos voluptate nesciunt facilis itaque modi commodi degnissimos sequi repudiandaetrừ ab
                    deleniti totam officia id sự cố?
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Card>
          <Box>
            <Typography color={'#2a2a2a'} fontSize={'18px'} fontWeight={700}>
              Thêm đánh giá của bạn
            </Typography>
            <Box sx={{ my: '15px' }}>
              <RatingCustom />
            </Box>
            <TextField
              rows={4}
              fullWidth
              multiline
              id="invoice-note"
              sx={{ '& .MuiInputBase-input': { color: 'text.secondary' } }}
              placeholder="Đánh giá của bạn sẽ giúp chúng tôi và nhà cung cấp có cái nhìn khách quan về sản phẩm. Từ đó không ngừng cải thiện và mang lại trải nghiệm tốt hơn cho bạn. Chân thành cảm ơn!"
            />
            <Button variant="contained" sx={{ mt: '15px', fontWeight: 600 }} endIcon={<TbSend />}>
              Gửi đánh giá
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4} md={2}>
          <Typography color={'#2a2a2a'} fontSize={'18px'} fontWeight={700}>
            Số sao
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Rating sx={{ fontSize: '15px' }} name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
            <Typography fontSize={'14px'} color={'#253D69'} fontWeight={700}>
              4,8 trên 5
            </Typography>
          </Box>
          <Box sx={{ mt: '10px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Typography fontSize={'12px'}>5 sao</Typography>
              <MobileStepper
                variant="progress"
                steps={10}
                activeStep={8}
                position="static"
                sx={{
                  maxWidth: 300,
                  flexGrow: 1,
                  width: '80% !important',
                  background: 'transparent !important',
                  '& span': { width: '100%' },
                }}
                nextButton={<></>}
                backButton={<></>}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Typography fontSize={'12px'}>4 sao</Typography>
              <MobileStepper
                variant="progress"
                steps={10}
                activeStep={2}
                position="static"
                sx={{
                  maxWidth: 300,
                  flexGrow: 1,
                  width: '80% !important',
                  background: 'transparent !important',
                  '& span': { width: '100%' },
                }}
                nextButton={<></>}
                backButton={<></>}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Typography fontSize={'12px'}>3 sao</Typography>
              <MobileStepper
                variant="progress"
                steps={10}
                activeStep={5}
                position="static"
                sx={{
                  maxWidth: 300,
                  flexGrow: 1,
                  width: '80% !important',
                  background: 'transparent !important',
                  '& span': { width: '100%' },
                }}
                nextButton={<></>}
                backButton={<></>}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Typography fontSize={'12px'}>1 sao</Typography>
              <MobileStepper
                variant="progress"
                steps={10}
                activeStep={0}
                position="static"
                sx={{
                  maxWidth: 300,
                  flexGrow: 1,
                  width: '80% !important',
                  background: 'transparent !important',
                  '& span': { width: '100%' },
                }}
                nextButton={<></>}
                backButton={<></>}
              />
            </Box>
            <Link href={'/'}>
              <Typography sx={{ mt: '10px' }} fontSize={'14px'}>
                Xếp hạng được tính như thế nào?
              </Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
