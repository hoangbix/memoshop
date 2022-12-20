import Countdown from 'react-countdown';
import { Box } from '@mui/material';
import DateTimeDisplay from './DateTimeDisplay';

interface Props {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const ExpiredNotice = ({ completed }: { completed: boolean }) => {
  return (
    <Box
      sx={{
        width: '90%',
        height: '65px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Box
        sx={{
          width: '60px',
          height: '65px',
          background: '#fff',
          borderRadius: '5px',
          boxShadow: '5px 5px 15px rgb(0 0 0 / 5%)',
        }}
      >
        <DateTimeDisplay value={0} type={'Ngày'} completed={completed} />
      </Box>
      <Box
        sx={{
          width: '60px',
          height: '65px',
          background: '#fff',
          borderRadius: '5px',
          boxShadow: '5px 5px 15px rgb(0 0 0 / 5%)',
        }}
      >
        <DateTimeDisplay value={0} type={'Giờ'} completed={completed} />
      </Box>
      <Box
        sx={{
          width: '60px',
          height: '65px',
          background: '#fff',
          borderRadius: '5px',
          boxShadow: '5px 5px 15px rgb(0 0 0 / 5%)',
        }}
      >
        <DateTimeDisplay value={0} type={'Phút'} completed={completed} />
      </Box>
      <Box
        sx={{
          width: '60px',
          height: '65px',
          background: '#fff',
          borderRadius: '5px',
          boxShadow: '5px 5px 15px rgb(0 0 0 / 5%)',
        }}
      >
        <DateTimeDisplay value={0} type={'Giây'} completed={completed} />
      </Box>
    </Box>
  );
};

export const showCounter = ({ days, hours, minutes, seconds, completed }: Props) => {
  if (completed) {
    return <ExpiredNotice completed={completed} />;
  }
  return (
    <Box
      sx={{
        width: '90%',
        height: '65px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      <Box
        sx={{
          width: '60px',
          height: '65px',
          background: '#fff',
          borderRadius: '5px',
          boxShadow: '5px 5px 15px rgb(0 0 0 / 5%)',
        }}
      >
        <DateTimeDisplay value={days} type={'Ngày'} />
      </Box>
      <Box
        sx={{
          width: '60px',
          height: '65px',
          background: '#fff',
          borderRadius: '5px',
          boxShadow: '5px 5px 15px rgb(0 0 0 / 5%)',
        }}
      >
        <DateTimeDisplay value={hours} type={'Giờ'} />
      </Box>
      <Box
        sx={{
          width: '60px',
          height: '65px',
          background: '#fff',
          borderRadius: '5px',
          boxShadow: '5px 5px 15px rgb(0 0 0 / 5%)',
        }}
      >
        <DateTimeDisplay value={minutes} type={'Phút'} />
      </Box>
      <Box
        sx={{
          width: '60px',
          height: '65px',
          background: '#fff',
          borderRadius: '5px',
          boxShadow: '5px 5px 15px rgb(0 0 0 / 5%)',
        }}
      >
        <DateTimeDisplay value={seconds} type={'Giây'} />
      </Box>
    </Box>
  );
};

const CountdownTimer = ({ date }: { date: string | Date }) => {
  return <Countdown date={new Date(date)} renderer={showCounter} autoStart />;
};

export default CountdownTimer;
