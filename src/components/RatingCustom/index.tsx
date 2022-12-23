import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { useState } from 'react';

const labels: { [index: string]: string } = {
  0.5: 'Quá tệ',
  1: 'Tệ',
  1.5: 'Vô dụng',
  2: 'Không tốt',
  2.5: 'Tạm được',
  3: 'Bình thường',
  3.5: 'Tốt',
  4: 'Rất tốt',
  4.5: 'Xuất sắc',
  5: 'Tuyệt vời',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function RatingCustom() {
  const [value, setValue] = useState<number | null>(4.5);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      sx={{
        width: 300,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        sx={{ fontSize: '22px' }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
    </Box>
  );
}
