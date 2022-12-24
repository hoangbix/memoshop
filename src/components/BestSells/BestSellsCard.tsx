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
import MobileStepper from '@mui/material/MobileStepper';

export const BestSellsCard = ({ data }: { data: ProductType }) => {
  const renderStatus = () => {
    let status = {
      text: '',
      bg: '',
    };
    if (data.isHot) {
      status = { text: 'Hot', bg: '#f59758' };
    }
    if (data.isNew) {
      status = { text: 'New', bg: '#5a7aff' };
    }
    if (data.discount) {
      status = { text: `-${data.discount}%`, bg: '#3BB77E' };
    }
    return status;
  };

  const renderSold = () => {
    let status = {
      text: 'Còn hàng',
      color: '#3BB77E',
    };

    if (data.quantity - data.sold === 0) {
      status = {
        text: 'Hết hàng',
        color: '#e20000',
      };
    }
    if (data.quantity - data.sold < 5 && data.quantity - data.sold !== 0) {
      status = {
        text: 'Sắp hết hàng',
        color: '#ef7600',
      };
    }
    return status;
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 10px' }}>
      <Box sx={{ position: 'relative' }}>
        <Card
          sx={{
            width: '100%',
            height: 520,
            boxShadow: 'none',
            border: '1px solid #d8ebe5',
            borderRadius: '15px',
            padding: '15px',
          }}
        >
          <CardMedia
            component="img"
            height="217"
            image={data.image}
            alt="green iguana"
            sx={{ borderRadius: '10px', backgroundPosition: 'cover' }}
          />
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
          <Box sx={{ display: 'flex', alignItems: 'end', gap: '10px' }}>
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
          <Box sx={{ my: '10px' }}>
            <MobileStepper
              variant="progress"
              steps={data.quantity}
              activeStep={data.sold}
              position="static"
              sx={{
                maxWidth: 400,
                flexGrow: 1,
                width: '100% !important',
                background: 'transparent !important',
                padding: '0 0 8px 0',
                '& span': { width: '100%' },
              }}
              nextButton={<></>}
              backButton={<></>}
            />
            <Typography color={'#253D4E'} fontSize={'14px'} fontWeight={600}>
              Đã bán: {data.sold}/{data.quantity}
            </Typography>
          </Box>

          <Typography color={'#253D4E'} fontSize={'14px'} fontWeight={600} sx={{ my: '10px' }}>
            Tình trạng: <span style={{ color: renderSold().color }}>{renderSold().text}</span>
          </Typography>

          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 !important',
            }}
          >
            <Button
              variant="contained"
              startIcon={<BiCart />}
              disabled={data.quantity - data.sold === 0}
              sx={{
                width: '100%',
                height: '36px',
                backgroundColor: '#3BB77E',
                color: 'white',
                fontWeight: 700,
                borderRadius: '1px',
                mt: '10px',
              }}
            >
              Thêm vào giỏ hàng
            </Button>
          </CardActions>
        </Card>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 999,
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
