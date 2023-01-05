import Link from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { BiCart } from 'react-icons/bi';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { useMediaQuery } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { ProductType } from 'src/types/product';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import MobileStepper from '@mui/material/MobileStepper';

export const BestSellsCard = ({ data }: { data: ProductType }) => {
  const isMobile = useMediaQuery('(max-width:650px)');

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
    if (data.promotionalPrice) {
      status = {
        text: `-${Math.abs(((data.promotionalPrice - data.price) / data.price) * 100).toFixed(0)}%`,
        bg: '#3BB77E',
      };
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
            width: { xs: 220, lg: 290 },
            maxWidth: '100%',
            height: { xs: 'auto', lg: 520 },
            boxShadow: 'none',
            border: '1px solid #d8ebe5',
            borderRadius: '15px',
            padding: { xs: '10px 5px', sm: '10px', md: '15px' },
          }}
        >
          <Link href={`/san-pham/${data.slug}`} passHref>
            <CardMedia
              component="img"
              image={data.images[0].url}
              alt={data.title}
              sx={{ borderRadius: '10px', backgroundPosition: 'cover', height: { xs: 160, lg: 217 } }}
            />
          </Link>

          <CardContent sx={{ padding: '10px 0', mb: '10px' }}>
            <Link href={`/san-pham/${data.slug}`} passHref>
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
                {data.title}
              </Typography>
            </Link>
            {/* <Box
              sx={{
                display: 'flex',
                alignItems: 'end',
              }}
            >
              <Rating size="small" name="half-rating-read" defaultValue={data.rating} precision={0.5} readOnly />
              <Box sx={{ ml: 2, fontSize: '12px', fontWeight: 600 }}>({data.rating})</Box>
            </Box> */}
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'end', gap: '10px' }}>
            {data.price > 0 ? (
              <>
                {data.promotionalPrice ? (
                  <>
                    <Typography color={'#3BB77E'} fontSize="18px" fontWeight={'bold'}>
                      {data.promotionalPrice.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
                    </Typography>
                    <Typography
                      color={'#adadad'}
                      fontSize="14px"
                      fontWeight={'600'}
                      sx={{ textDecoration: 'line-through' }}
                    >
                      {data.price.toLocaleString('vi-VN', {
                        maximumFractionDigits: 2,
                      })}
                      đ
                    </Typography>
                  </>
                ) : (
                  <Typography color={'#3BB77E'} fontSize="18px" fontWeight={'bold'}>
                    {data.price.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
                  </Typography>
                )}
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

          <Box sx={{ my: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Typography
              color={'#253D4E'}
              fontSize={'14px'}
              fontWeight={600}
              sx={{ display: { xs: 'none', lg: 'block' } }}
            >
              Tình trạng:
            </Typography>
            <Typography color={renderSold().color} fontSize={'14px'} fontWeight={600}>
              {renderSold().text}
            </Typography>
          </Box>

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
              startIcon={!isMobile ? <BiCart /> : <></>}
              disabled={data.quantity - data.sold === 0}
              sx={{
                width: '100%',
                height: '40px',
                backgroundColor: '#3BB77E',
                color: 'white',
                fontWeight: 700,
                borderRadius: '1px',
                mt: '10px',
                padding: { sm: '4px 2px', lg: 'auto' },
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
