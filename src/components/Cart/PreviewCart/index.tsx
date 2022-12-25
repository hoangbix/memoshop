import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';

import { FiLogIn } from 'react-icons/fi';
import { FaAmazonPay } from 'react-icons/fa';
import PaypalIcon from 'src/images/icons/payment-paypal.svg';
import VisaIcon from 'src/images/icons/payment-visa.svg';

export const PreviewCart = ({ onlyRead }: { onlyRead?: boolean }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <List
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', lg: 360 },
          bgcolor: 'background.paper',
          borderRadius: '10px',
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          padding: '20px 10px',
        }}
        subheader={
          <ListSubheader
            sx={{
              fontSize: '18px',
              fontWeight: 700,
              textAlign: 'center',
              borderRadius: '10px',
            }}
          >
            Tổng quan
          </ListSubheader>
        }
      >
        <ListItem>
          <ListItemText id="switch-list-label-wifi" primary="Tạm tính:" />
          <Typography color={'#3BB77E'} fontWeight={700}>
            150.000đ
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText id="switch-list-label-wifi" primary="Phí vận chuyển:" />
          <Typography color={'#3BB77E'} fontWeight={700}>
            17.000đ
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText id="switch-list-label-wifi" primary="Thuế VAT (10%):" />
          <Typography color={'#3BB77E'} fontWeight={700}>
            15.000đ
          </Typography>
        </ListItem>
        <Divider />
        {onlyRead ? (
          <>
            <ListItem>
              <ListItemText id="switch-list-label-wifi" primary="Mã giảm giá: (20%)" />
              <Typography color={'#3BB77E'} fontWeight={700}>
                21.000đ
              </Typography>
            </ListItem>
            <Divider />
          </>
        ) : null}
        <ListItem>
          <ListItemText id="switch-list-label-wifi" primary="Tổng cộng:" />
          <Typography color={'#3BB77E'} fontWeight={700}>
            182.000đ
          </Typography>
        </ListItem>

        {!onlyRead ? (
          <>
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  borderRadius: '5px',
                  textTransform: 'uppercase !important',
                  fontWeight: 700,
                  color: 'white !important',
                }}
                endIcon={<FiLogIn />}
                component={Link}
                href={'/thanh-toan'}
              >
                Tiến hành thanh toán
              </Button>
            </ListItem>
            <Typography color={'#f34d59'} fontSize={'14px'} textAlign={'center'} sx={{ mt: '15px' }}>
              Mã giảm giá sẽ được nhập ở bước thanh toán
            </Typography>
          </>
        ) : null}
      </List>
      {onlyRead ? (
        <Box sx={{ mt: '30px' }}>
          <Typography color={'#253D4E'} fontSize={'24px'} fontWeight={700}>
            Hình thức thanh toán
          </Typography>
          <FormControl>
            <RadioGroup defaultValue="male">
              <FormControlLabel
                onChange={handleChange('')}
                value="male"
                control={<Radio />}
                label="Thanh toán khi giao hàng"
              />
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                sx={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  maxWidth: '100%',
                }}
              >
                <AccordionSummary
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{
                    m: 0,
                    p: 0,
                    minHeight: '40px !important',
                    '& .css-o4b71y-MuiAccordionSummary-content': { m: 0 },
                  }}
                >
                  <FormControlLabel
                    onChange={handleChange('panel1')}
                    control={<Radio />}
                    value="bank"
                    label="Chuyển tiền qua ngân hàng"
                  />
                </AccordionSummary>
                <AccordionDetails sx={{ border: '1px solid #cccccc80', borderRadius: '5px' }}>
                  <List
                    sx={{ width: '100%', bgcolor: 'transparent' }}
                    subheader={
                      <ListSubheader
                        sx={{
                          color: '#3BB77E',
                          fontWeight: 700,
                          bgcolor: 'transparent',
                          textAlign: 'center',
                        }}
                      >
                        Thông tin ngân hàng & nội dung chuyển khoản
                      </ListSubheader>
                    }
                  >
                    <ListItem sx={{ fontSize: '14px', paddingTop: 0 }}>
                      <ListItemText primary={<Typography fontSize={'14px'}>Chủ tài khoản</Typography>} />
                      <span style={{ color: '#3BB77E', fontWeight: 600 }}>Công ty MTV MemoShop</span>
                    </ListItem>
                    <ListItem sx={{ fontSize: '14px', paddingTop: 0 }}>
                      <ListItemText primary={<Typography fontSize={'14px'}>Số tài khoản</Typography>} />
                      <span style={{ color: '#3BB77E', fontWeight: 600 }}>0201000564432</span>
                    </ListItem>
                    <ListItem sx={{ fontSize: '14px', paddingTop: 0 }}>
                      <ListItemText primary={<Typography fontSize={'14px'}>Chi nhánh</Typography>} />
                      <span style={{ color: '#3BB77E', fontWeight: 600 }}>Hồ Chí Minh</span>
                    </ListItem>
                    <ListItem sx={{ fontSize: '14px', paddingTop: 0 }}>
                      <ListItemText primary={<Typography fontSize={'14px'}>Số tiền</Typography>} />
                      <span style={{ color: '#3BB77E', fontWeight: 600 }}>879.900đ</span>
                    </ListItem>
                    <ListItem sx={{ fontSize: '14px', paddingTop: 0 }}>
                      <ListItemText
                        primary={
                          <Typography fontSize={'14px'}>
                            Nội dung chuyển khoản<span style={{ color: '#dd0a0a' }}>*</span>
                          </Typography>
                        }
                      />
                      <span style={{ color: '#3BB77E', fontWeight: 600 }}>MMSFW0966JM</span>
                    </ListItem>
                  </List>
                  <Typography fontSize={'14px'} color={'#dd0a0a'} sx={{ mb: '10px' }}>
                    * Vui lòng ghi đúng nội dung chuyển khoản để đơn hàng được xử lý nhanh nhất.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <FormControlLabel onChange={handleChange('')} value="paypal" control={<Radio />} label={<PaypalIcon />} />
              <FormControlLabel onChange={handleChange('')} value="visa" control={<Radio />} label={<VisaIcon />} />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            sx={{ borderRadius: '5px', mt: '15px', fontWeight: 700 }}
            endIcon={<FaAmazonPay />}
          >
            Thanh toán
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};
