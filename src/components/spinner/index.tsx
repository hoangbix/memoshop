import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import LogoIcon from 'src/images/icons/logo.svg';

const FallbackSpinner = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <LogoIcon width={150} />
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  );
};

export default FallbackSpinner;
