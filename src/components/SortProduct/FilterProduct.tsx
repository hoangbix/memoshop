import { Button, Box } from '@mui/material';

export const FilterProduct = ({ filterHandler }: any) => {
  return (
    <>
      <Button variant="contained">All</Button>
      <Button variant="contained">Thịt</Button>
      <Button variant="contained">Rau</Button>
    </>
  );
};
