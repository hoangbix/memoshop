import { Box, Button, Divider, IconButton, InputBase, Paper } from '@mui/material';
import { AiOutlineSearch } from 'react-icons/ai';
import MenuTreeView from './MenuTreeView';

export const BodyNav = ({ handleDrawerToggle }: { handleDrawerToggle: () => void }) => {
  return (
    <Box sx={{ padding: '30px' }}>
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          alignItems: 'center',
          borderRadius: '5px',
          boxShadow: 'none',
          border: '2px solid #3BB77E90',
          flex: 1,
          display: 'flex',
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Nhập để tìm kiếm sản phẩm..." />
        <Divider sx={{ height: 28, m: 0.5, background: '#3BB77E90' }} orientation="vertical" />
        <Button sx={{ p: '10px' }} aria-label="directions">
          <AiOutlineSearch fontSize={'28px'} />
        </Button>
      </Paper>
      <MenuTreeView handleDrawerToggle={handleDrawerToggle} />
    </Box>
  );
};
