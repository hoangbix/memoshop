import { Box, Slider, Typography } from '@mui/material';
import { useState } from 'react';

function valuetext(value: number) {
  return `${value}°C`;
}

export const FillByPrice = () => {
  const [value, setValue] = useState<number[]>([0, 500000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        min={0}
        max={2000000}
        onChange={handleChange}
        getAriaValueText={valuetext}
        step={10000}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography fontSize={'14px'}>
          Từ:{' '}
          <span style={{ color: '#3BB77E', fontWeight: 600 }}>
            {value[0].toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
          </span>
        </Typography>
        <Typography fontSize={'14px'}>
          Đến:{' '}
          <span style={{ color: '#3BB77E', fontWeight: 600 }}>
            {value[1].toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ
          </span>
        </Typography>
      </Box>
    </Box>
  );
};
