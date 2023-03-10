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
    title: 'S???a',
    menuChildren: [
      { name: 'M???t s???a' },
      { name: 'Ph?? mai' },
      { name: 'Tr???ng ????nh s???a' },
      { name: 'B?? v?? Margarine' },
      { name: 'Kem t????i' },
    ],
    icon: Category1,
  },
  {
    id: 'panel2',
    title: '????? u???ng',
    menuChildren: [
      { name: 'Cafe truy???n th???ng' },
      { name: 'Cafe ngo???i nh???p' },
      { name: 'Sinh t???, n?????c ??p hoa qu???' },
      { name: 'C??c lo???i tr??' },
    ],
    icon: Category2,
  },
  {
    id: 'panel3',
    title: 'Th???c ph???m',
    menuChildren: [{ name: 'Th???t gia c???m' }, { name: 'H???i s???n' }, { name: 'Th???c ph???m ????ng h???p' }],
    icon: Category3,
  },
  {
    id: 'panel4',
    title: 'Nguy??n li???u l??m b??nh',
    menuChildren: [{ name: 'C??c lo???i b???t' }, { name: 'C??c lo???i b??' }],
    icon: Category4,
  },
  {
    id: 'panel5',
    title: 'Hoa qu??? t????i',
    menuChildren: [
      { name: 'Tr??i c??y t????i Vi???t Nam' },
      { name: 'Tr??i c??y t????i nh???p kh???u' },
      { name: 'Tr??i c??y kh?? ????ng g??i' },
    ],
    icon: Category5,
  },
  { id: 'panel6', title: 'Th???c ph???m ????ng g??i', menuChildren: [], icon: Category6 },
];
