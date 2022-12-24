import { Box, Paper, Typography } from '@mui/material';

export const OrganicBanner = () => {
  return (
    <Paper
      sx={{
        height: 307,
        maxWidth: 506,
        borderRadius: '20px',
        backgroundImage: `url('/images/assets/banner-11.png')`,
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        transition: '0.2s ease-in-out',
        padding: '20px',
        ':hover': {
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography color={'#adadad'} fontSize={'14px'} fontWeight={700}>
          Orangic
        </Typography>
        <Typography color={'#253D4E'} fontSize={'24px'} fontWeight={700} sx={{ cursor: 'default' }}>
          Tiết kiệm 17%
        </Typography>
      </Box>
    </Paper>
  );
};
