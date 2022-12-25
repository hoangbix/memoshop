import { Box, Button, Divider, IconButton, Rating, TextField, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactNode } from 'react';

import { BiTrash } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { RxUpdate } from 'react-icons/rx';

interface Column {
  id: 'product' | 'price' | 'quantity' | 'subtotal' | 'action';
  label: string;
  minWidth?: number;
  align?: 'right' | 'center';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'product', label: 'Sản phẩm', minWidth: 250 },
  {
    id: 'price',
    label: 'Đơn giá',
    minWidth: 70,
    align: 'center',
    format: (value: number) => `${value.toLocaleString('vi-VN', { maximumFractionDigits: 2 })}đ`,
  },
  {
    id: 'quantity',
    label: 'Số lượng',
    minWidth: 70,
    align: 'center',
  },
  {
    id: 'subtotal',
    label: 'Tạm tính',
    minWidth: 70,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'action',
    label: 'Hành động',
    minWidth: 70,
    align: 'center',
  },
];

interface Data {
  product: ReactNode;
  price: number;
  quantity: ReactNode;
  subtotal: number;
  action: ReactNode;
}

function createData(product: ReactNode, price: number, quantity: ReactNode, subtotal: number, action: ReactNode): Data {
  return { product, price, quantity, subtotal, action };
}

const rows = [
  createData(
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <Box
        component={'img'}
        src={'/images/assets/product-1.jpg'}
        sx={{ width: '70px', height: '70px', objectFit: 'cover' }}
      />
      <Box>
        <Typography fontWeight={700} fontSize={{ xs: '14px', md: '16px' }}>
          Blue Diamond Almonds Lightly Salted
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'end',
          }}
        >
          <Rating sx={{ fontSize: '15px' }} name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
          <Box sx={{ ml: 2, fontSize: '12px', fontWeight: 600 }}>(4)</Box>
        </Box>
      </Box>
    </Box>,
    120000,
    <TextField
      inputProps={{
        type: 'number',
        min: 1,
        max: 10,
        defaultValue: 5,
        style: {
          fontWeight: 700,
          maxWidth: '100%',
          height: 10,
          border: '1px solid #cccccc50',
          borderRadius: '5px',
          textAlign: 'center',
        },
      }}
    />,
    100,
    <IconButton>
      <BiTrash fontSize={'20px'} />
    </IconButton>
  ),
];

export const ListProductCart = () => {
  return (
    <Box sx={{ my: '30px' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth, fontWeight: 700 }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  role="checkbox"
                  tabIndex={-1}
                  key={row.price}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider sx={{ my: '20px' }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          variant="contained"
          sx={{ borderRadius: '5px', minWidth: '100px', fontSize: '14px', fontWeight: 700 }}
          startIcon={<BsArrowLeft />}
        >
          Tiếp tục mua sắm
        </Button>
        <Button
          variant="contained"
          sx={{ borderRadius: '5px', minWidth: '100px', fontSize: '14px', fontWeight: 700 }}
          startIcon={<RxUpdate />}
        >
          Cập nhật giỏ hàng
        </Button>
      </Box>
    </Box>
  );
};
