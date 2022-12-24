import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { BiCart } from 'react-icons/bi';
import { ProductType } from 'src/types/product';

export const CardProduct = ({ data }: { data: ProductType }) => {
  const renderStatus = () => {
    let status = {
      text: '',
      bg: '',
    };
    if (data.isHot) {
      status = { text: 'Hot', bg: '#f59758' };
    }
    if (data.isNew) {
      status = { text: 'Mới', bg: '#5a7aff' };
    }
    if (data.discount) {
      status = { text: `-${data.discount}%`, bg: '#3BB77E' };
    }
    return status;
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Card
          sx={{
            width: 'auto',
            maxWidth: '100%',
            height: { xs: 420, sm: 420, md: 470 },
            maxHeight: '100%',
            boxShadow: 'none',
            border: '1px solid #DEF9EC',
            borderRadius: '15px',
            padding: { xs: '5px', md: '15px' },
          }}
        >
          <CardMedia
            component="img"
            image={data.image}
            alt="green iguana"
            sx={{ borderRadius: '10px', objectFit: 'contain', height: { xs: 150, md: 217 } }}
          />
          <CardContent sx={{ padding: '10px 0', mb: '10px' }}>
            <Typography
              gutterBottom
              variant="h5"
              height={{ xs: 40, md: 43 }}
              sx={{
                color: '#253D4E',
                fontWeight: 600,
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                fontSize: { xs: '14px', md: '16px' },
              }}
            >
              {data.name}
            </Typography>
            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'end',
              }}
            >
              <Rating size="small" name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
              <Box sx={{ ml: 2, fontSize: '12px', fontWeight: 600 }}>({data.rating})</Box>
            </Box>
          </CardContent>
          <Typography
            gutterBottom
            variant="h5"
            height={'55px'}
            sx={{
              color: '#253D4E',
              fontSize: '14px',
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              mb: '10px',
            }}
          >
            {data.desc}
          </Typography>
          <CardActions
            sx={{
              display: { xs: 'block', sm: 'flex' },
              justifyContent: { xs: 'center', sm: 'space-between' },
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: { xs: 'flex', sm: 'block' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                mb: '10px',
              }}
            >
              {data.price > 0 ? (
                <>
                  <Typography color={'#3BB77E'} fontSize={{ xs: '14px', lg: '18px' }} fontWeight={'bold'}>
                    {data.price.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
                  </Typography>
                  {data.discount ? (
                    <Typography
                      color={'#adadad'}
                      fontSize={{ xs: '12px', lg: '14px' }}
                      fontWeight={'600'}
                      sx={{ textDecoration: 'line-through' }}
                    >
                      {(data.price + (data.price * data.discount) / 100).toLocaleString('vi-VN', {
                        maximumFractionDigits: 2,
                      })}
                      đ
                    </Typography>
                  ) : null}
                </>
              ) : (
                <Typography color={'#3BB77E'} fontSize="14px" fontWeight={'600'}>
                  Liên hệ
                </Typography>
              )}
            </Box>
            <Box sx={{ display: { xs: 'flex', sm: 'block' }, justifyContent: 'center', alignItems: 'center' }}>
              <Button
                variant="outlined"
                startIcon={<BiCart />}
                sx={{
                  width: '84px',
                  height: '36px',
                  backgroundColor: '#DEF9EC',
                  fontWeight: 700,
                  fontSize: { xs: '14px', md: '16px' },
                }}
              >
                Thêm
              </Button>
            </Box>
          </CardActions>
        </Card>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 9,
            width: '60px',
            height: '31px',
            borderRadius: '15px 0 20px 0',
            padding: '5px 20px 10px 15px',
            backgroundColor: renderStatus().bg,
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              color: 'white',
              fontWeight: 600,
            }}
          >
            {renderStatus().text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
