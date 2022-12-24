import Rating from '@mui/material/Rating';
import { Box, Typography } from '@mui/material';
import { ProductType } from 'src/types/product';

export const ProductHorizontalItem = ({ product, isDetail }: { product: ProductType; isDetail?: boolean }) => {
  return (
    <Box
      sx={{
        height: 111,
        width: '100%',
        transition: '0.2s ease',
        boxShadow: 'none',
        display: 'flex',
        cursor: 'pointer',
        borderRadius: '10px',
        ':hover': {
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        },
      }}
    >
      <Box component={'img'} src={product.image} sx={{ width: 104, height: '100%', borderRadius: '10px' }} />
      <Box sx={{ padding: '15px' }}>
        <Typography
          gutterBottom
          variant="h5"
          height={'40px'}
          sx={{
            color: '#253D4E',
            fontSize: isDetail ? '14px' : '16px',
            fontWeight: 700,
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
        >
          {product.name}
        </Typography>
        <Box
          sx={{
            width: isDetail ? 80 : 200,
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'end',
          }}
        >
          <Rating size="small" name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
          <Box sx={{ ml: 2, fontSize: '12px', fontWeight: 600 }}>({product.rating})</Box>
        </Box>
        <Box>
          {product.price > 0 ? (
            <Box sx={{ display: 'flex', alignItems: 'end', gap: '10px' }}>
              <Typography color={'#3BB77E'} fontSize={isDetail ? '16px' : '18px'} fontWeight={'bold'}>
                {product.price.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
              </Typography>
              {product.discount ? (
                <Typography
                  color={'#adadad'}
                  fontSize={isDetail ? '12px' : '14px'}
                  fontWeight={'600'}
                  sx={{ textDecoration: 'line-through' }}
                >
                  {(product.price + (product.price * product.discount) / 100).toLocaleString('vi-VN', {
                    maximumFractionDigits: 2,
                  })}
                  đ
                </Typography>
              ) : null}
            </Box>
          ) : (
            <Typography color={'#3BB77E'} fontSize={isDetail ? '12px' : '14px'} fontWeight={'600'}>
              Liên hệ
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
