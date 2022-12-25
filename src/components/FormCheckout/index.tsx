import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { SyntheticEvent, useState } from 'react';

export const FormCheckout = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Typography variant="h4" fontSize={'24px'} color={'#253D4E'} fontWeight={700}>
        Chi tiết thanh toán
      </Typography>
      <Grid container spacing={4} lg={12} sx={{ mt: '10px' }}>
        <Grid item xs={12} md={6}>
          <TextField required label="Họ và tên" fullWidth sx={{ mb: '15px' }} />
          <TextField required label="Số điện thoại" fullWidth sx={{ mb: '15px' }} />
          <TextField required label="Địa chỉ email" fullWidth sx={{ mb: '15px' }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required label="Địa chỉ giao hàng" fullWidth sx={{ mb: '15px' }} />
          <TextField required label="Mã bưu/Zip" fullWidth sx={{ mb: '15px' }} />
          <TextField label="Địa chỉ 2" fullWidth sx={{ mb: '15px' }} />
        </Grid>
      </Grid>
      <TextField
        rows={4}
        multiline
        label="Nhập ghi chú cho đơn hàng"
        id="invoice-note"
        sx={{ '& .MuiInputBase-input': { color: 'text.secondary' }, width: { xs: '100%', lg: '98%' } }}
      />

      <Box sx={{ mb: '30px' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          sx={{ backgroundColor: 'transparent', boxShadow: 'none', width: 400, maxWidth: '100%' }}
        >
          <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
            <FormControlLabel
              control={<Checkbox />}
              onChange={handleChange('panel1')}
              label={<Typography sx={{ color: '#3BB77E', fontWeight: 700 }}>Tạo tài khoản?</Typography>}
            />
          </AccordionSummary>
          <AccordionDetails>
            <TextField required label="Mật khẩu" fullWidth size={'small'} sx={{ mb: '10px' }} />
            <TextField required label="Nhập lại mật khẩu" fullWidth size={'small'} />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
