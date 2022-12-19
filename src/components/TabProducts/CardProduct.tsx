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
    <>
      <Card
        sx={{
          width: 280,
          height: '470px',
          boxShadow: 'none',
          border: '1px solid #DEF9EC',
          borderRadius: '15px',
          padding: '15px',
          position: 'relative',
        }}
      >
        <CardMedia component="img" height="217" image={data.image} alt="green iguana" sx={{ borderRadius: '10px' }} />
        <CardContent sx={{ padding: '10px 0', mb: '10px' }}>
          <Typography
            gutterBottom
            variant="h5"
            height={'43px'}
            sx={{
              color: '#253D4E',
              fontSize: '16px',
              fontWeight: 600,
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
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
        <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            {data.price > 0 ? (
              <>
                <Typography color={'#3BB77E'} fontSize="18px" fontWeight={'bold'}>
                  {data.price.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
                </Typography>
                {data.discount ? (
                  <Typography
                    color={'#adadad'}
                    fontSize="14px"
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
          <Box>
            <Button
              variant="outlined"
              startIcon={<BiCart />}
              sx={{ width: '84px', height: '36px', backgroundColor: '#DEF9EC', fontWeight: 700 }}
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
    </>
  );
};
