import Rating from '@mui/material/Rating';
import { Box, Typography } from '@mui/material';
import { ProductType } from 'src/types/product';
import Link from 'next/link';

export const ProductHorizontalItem = ({ product, isDetail }: { product: ProductType; isDetail?: boolean }) => {
  return (
    <Link href={`/san-pham/${product.slug}`} passHref>
      <Box
        sx={{
          height: 111,
          transition: '0.2s ease',
          boxShadow: 'none',
          display: 'flex',
          cursor: 'pointer',
          border: '1px solid #cccccc50',
          borderRadius: '10px',
          ':hover': {
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          },
        }}
      >
        <Box component={'img'} src={product.images[0].url} sx={{ width: 104, height: '100%', borderRadius: '10px' }} />
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
            {product.title}
          </Typography>
          <Box
            sx={{
              width: isDetail ? 80 : 200,
              maxWidth: '100%',
              display: 'flex',
              alignItems: 'end',
            }}
          >
            {/* <Rating size="small" name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly /> */}
            <Rating size="small" name="half-rating-read" defaultValue={0} precision={0.5} readOnly />
            <Box sx={{ ml: 2, fontSize: '12px', fontWeight: 600 }}>({product.totalratings})</Box>
          </Box>
          <Box>
            {product.price > 0 ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Typography color={'#3BB77E'} fontSize={{ xs: '14px', lg: '18px' }} fontWeight={'bold'}>
                  {product.promotionalPrice
                    ? `${product.promotionalPrice.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}??`
                    : `${product.price.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}??`}
                </Typography>
                {product.promotionalPrice ? (
                  <Typography
                    color={'#adadad'}
                    fontSize={{ xs: '12px', lg: '14px' }}
                    fontWeight={'600'}
                    sx={{ textDecoration: 'line-through' }}
                  >
                    {product.price.toLocaleString('vi-VN', {
                      maximumFractionDigits: 2,
                    })}
                    ??
                  </Typography>
                ) : null}
              </Box>
            ) : (
              <Typography color={'#3BB77E'} fontSize="14px" fontWeight={'600'}>
                Li??n h???
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};
