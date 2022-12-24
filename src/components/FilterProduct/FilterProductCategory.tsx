import { Box, Typography, Button, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SyntheticEvent, useState } from 'react';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import { BiChevronRight } from 'react-icons/bi';
import Category1 from 'src/images/icons/category-1.svg';
import Category2 from 'src/images/icons/category-2.svg';
import Category3 from 'src/images/icons/category-3.svg';
import Category4 from 'src/images/icons/category-4.svg';
import Category5 from 'src/images/icons/category-5.svg';
import Category6 from 'src/images/icons/category-6.svg';

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    borderBottom: `1px solid #cccccc50`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  })
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<BiChevronRight />} {...props} />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid #cccccc50',
}));

export const FilterProductCategory = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {listMenu.map((menu) => {
        const Icon = menu.icon;
        return (
          <Box key={menu.id}>
            <Accordion expanded={expanded === menu.id} onChange={handleChange(menu.id)}>
              <AccordionSummary aria-controls={`${menu.id}d-content`} id={`${menu.id}d-header`} sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Typography sx={{ fontWeight: 600 }}>{menu.title}</Typography> <Icon width={'26px'} />
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <List sx={{ padding: 0 }}>
                    {menu.menuChildren.map((item, i) => (
                      <ListItem sx={{ padding: '2px 10px' }} key={i}>
                        <Button sx={{ width: '100%', justifyContent: 'flex-start' }}>{item.name}</Button>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        );
      })}
    </>
  );
};

const listMenu = [
  {
    id: 'panel1',
    title: 'Sữa',
    menuChildren: [
      { name: 'Mứt sữa' },
      { name: 'Phô mai' },
      { name: 'Trứng đánh sữa' },
      { name: 'Bơ và Margarine' },
      { name: 'Kem tươi' },
    ],
    icon: Category1,
  },
  {
    id: 'panel2',
    title: 'Đồ uống',
    menuChildren: [
      { name: 'Cafe truyền thống' },
      { name: 'Cafe ngoại nhập' },
      { name: 'Sinh tố, nước ép hoa quả' },
      { name: 'Các loại trà' },
    ],
    icon: Category2,
  },
  {
    id: 'panel3',
    title: 'Thực phẩm',
    menuChildren: [{ name: 'Thịt gia cầm' }, { name: 'Hải sản' }, { name: 'Thực phẩm đóng hộp' }],
    icon: Category3,
  },
  {
    id: 'panel4',
    title: 'Nguyên liệu làm bánh',
    menuChildren: [{ name: 'Các loại bột' }, { name: 'Các loại bơ' }],
    icon: Category4,
  },
  {
    id: 'panel5',
    title: 'Hoa quả tươi',
    menuChildren: [
      { name: 'Trái cây tươi Việt Nam' },
      { name: 'Trái cây tươi nhập khẩu' },
      { name: 'Trái cây khô đóng gói' },
    ],
    icon: Category5,
  },
  { id: 'panel6', title: 'Thực phẩm đóng gói', menuChildren: [], icon: Category6 },
];
