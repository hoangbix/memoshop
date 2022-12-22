import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Box } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  nodeId: string;
  label: ReactNode;
  to?: string;
}

const TreeItemCustom = ({ children, nodeId, label, to = '/' }: Props) => {
  return (
    <TreeItem
      nodeId={nodeId}
      label={label}
      sx={{
        '& .MuiTreeItem-label': {
          fontSize: '16px !important',
          fontWeight: 700,
        },
        ':focus': {
          backgroundColor: 'transparent',
        },
      }}
    >
      {children}
    </TreeItem>
  );
};

const MenuTreeView = ({ handleDrawerToggle }: { handleDrawerToggle: () => void }) => {
  const TreeItemChildrenCustom = ({ children, nodeId, label, to = '/' }: Props) => {
    return (
      <TreeItem
        nodeId={nodeId}
        label={<Link href={to}>{label}</Link>}
        onClick={handleDrawerToggle}
        sx={{
          '& .MuiTreeItem-label': {
            fontSize: '14px !important',
            fontWeight: 400,
          },
        }}
      >
        {children}
      </TreeItem>
    );
  };

  return (
    <Box sx={{ my: '30px' }}>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<BiChevronUp />}
        defaultExpandIcon={<BiChevronDown />}
        sx={{
          flexGrow: 1,
          maxWidth: '100%',
          '& li': {
            padding: '7px 0 !important',
            '& .css-tfdy56-MuiTreeItem-content.Mui-selected': {
              backgroundColor: 'transparent !important',
            },
          },
          '& > li': {
            borderBottom: '1px solid #ececec',
          },
        }}
      >
        <TreeItemCustom nodeId={'1'} label={'Cửa hàng'}>
          <TreeItemChildrenCustom to={'/'} nodeId="2" label="Rau xanh" />
          <TreeItemChildrenCustom to={'/'} nodeId="3" label="Sản phẩm đóng gói" />
          <TreeItemChildrenCustom to={'/'} nodeId="4" label="Thịt & gia cầm" />
          <TreeItemChildrenCustom to={'/'} nodeId="4" label="Xúc xích nhập khẩu" />
          <TreeItemChildrenCustom to={'/'} nodeId="4" label="Bơ và Margarine" />
          <TreeItemChildrenCustom to={'/'} nodeId="4" label="Phô mai" />
          <TreeItemChildrenCustom to={'/'} nodeId="4" label="Thịt nguội cắt lát" />
        </TreeItemCustom>
        <TreeItemCustom nodeId="5" label="Nhà cung cấp">
          <TreeItemChildrenCustom to={'/about'} nodeId="6" label="Danh sách nhà cung cấp" />
          <TreeItemChildrenCustom to={'/'} nodeId="7" label="Cam kết về nhà cung cấp" />
          <TreeItemChildrenCustom to={'/'} nodeId="8" label="Đăng ký làm nhà cung cấp" />
        </TreeItemCustom>
        <TreeItemCustom nodeId="9" label="Đề xuất cho bạn">
          <TreeItemChildrenCustom to={'/about'} nodeId="10" label="Rau củ quả" />
          <TreeItemChildrenCustom to={'/'} nodeId="11" label="Thực phẩm tươi" />
          <TreeItemChildrenCustom to={'/'} nodeId="12" label="Sản phẩm đóng gói" />
        </TreeItemCustom>
        <TreeItemCustom nodeId="13" label="Tin tức & Mẹo">
          <TreeItemChildrenCustom to={'/'} nodeId="14" label="Tin tức" />
          <TreeItemChildrenCustom to={'/about'} nodeId="15" label="Mẹo" />
        </TreeItemCustom>
      </TreeView>
    </Box>
  );
};

export default MenuTreeView;
