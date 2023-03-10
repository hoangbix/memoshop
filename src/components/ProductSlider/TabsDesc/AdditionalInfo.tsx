import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProductType } from 'src/types/product';
import { format } from 'date-fns';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#d8f1e5',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#d8f1e550',
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name: string, calories: number | string) {
  return { name, calories };
}

export const AdditionalInfo = ({ data }: { data: ProductType }) => {
  const rows = [
    createData('Danh mục', `${data.category}`),
    createData('Nhà sản xuất', `${data.brand}`),
    createData('Ngày nhập hàng', `${format(new Date(data.importWarehouseDate), 'dd-MM-yyyy') || ''}`),
    createData('Hạn sử dụng', `${format(new Date(data.expirationDate), 'dd-MM-yyyy') || ''}`),
    createData('Bảo quản', 'Không gian thoáng'),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
