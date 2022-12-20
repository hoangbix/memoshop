import { Box, Typography } from '@mui/material';

const DateTimeDisplay = ({ value, type, completed }: { value: number; type: string; completed?: boolean }) => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}
    >
      <Typography color={!completed ? '#3BB77E' : 'red'} fontSize={'20px'} fontWeight={600}>
        {value}
      </Typography>
      <Typography color={!completed ? '#7E7E7E' : 'red'} fontSize={'14px'}>
        {type}
      </Typography>
    </Box>
  );
};

export default DateTimeDisplay;
