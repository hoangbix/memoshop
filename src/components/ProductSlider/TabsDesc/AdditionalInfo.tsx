import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

const rows = [
  createData('Kích thước', '35″L x 24″W x 37-45″H'),
  createData('Trọng lượng', '50/60/100/150 (gram)'),
  createData('Nhà sản xuất', 'An Viên'),
  createData('Hạn sử dụng', '01/06/2023'),
  createData('Bảo quản', 'Không gian thoáng'),
];

export const AdditionalInfo = () => {
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
