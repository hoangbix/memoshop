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
          maxWidth: 150,
          height: '205px',
          margin: '15px',
          padding: '10px',
          background: `#${bg}`,
          transition: '0.2s ease-in-out',
          ':hover': {
            boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
          },
        }}
      >
        <MuiLink component={Link} href={'/'}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
            <CardMedia component="img" width={'80px'} height={'80px'} image={img} alt={title} />
          </motion.div>
          <CardContent sx={{ mt: '10px' }}>
            <Typography variant="h5" fontSize={'16px'} fontWeight={600}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`${quantity} sản phẩm`}
            </Typography>
          </CardContent>
        </MuiLink>
      </Card>
    </Box>
  );
};

export default CategoryCard;
