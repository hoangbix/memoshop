import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Box, Link as MuiLink } from '@mui/material';
import { motion } from 'framer-motion';

interface Props {
  img: string;
  title: string;
  quantity: number;
  bg: string;
}

const CategoryCard = ({ data }: { data: Props }) => {
  const { img, title, quantity, bg } = data;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        sx={{
          width: 250,
          maxWidth: '100%',
          height: { xs: 150, lg: 180 },
          maxHeight: '100%',
          margin: '15px',
          padding: { xs: '0', md: '10px' },
          background: `#${bg}`,
          transition: '0.2s ease-in-out',
          ':hover': {
            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          },
        }}
      >
        <MuiLink component={Link} href={'/'}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <CardMedia
              component="img"
              width={'80px'}
              height={'80px'}
              image={img}
              alt={title}
              sx={{ objectFit: 'none' }}
            />
          </motion.div>
          <CardContent
            sx={{
              mt: '10px',
              padding: '0',
            }}
          >
            <Typography textAlign={'center'} variant="h5" fontSize={{ xs: '14px', md: '16px' }} fontWeight={600}>
              {title}
            </Typography>
            <Typography
              textAlign={'center'}
              variant="body2"
              color="text.secondary"
              fontSize={{ xs: '12px', md: '14px' }}
            >
              {`${quantity} sản phẩm`}
            </Typography>
          </CardContent>
        </MuiLink>
      </Card>
    </Box>
  );
};

export default CategoryCard;
