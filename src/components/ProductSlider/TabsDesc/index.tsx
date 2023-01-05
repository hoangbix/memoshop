import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SyntheticEvent, useState } from 'react';
import { AdditionalInfo } from './AdditionalInfo';
import { Vendor } from './Vendor';
import { ReviewDetail } from './ReviewDetail';
import { useMediaQuery } from '@mui/material';
import { ProductType } from 'src/types/product';
import Editor from 'src/components/Editor';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function TabsDesc({ data }: { data: ProductType }) {
  const [value, setValue] = useState(0);
  const smallScreen = useMediaQuery('(max-width: 768px)');

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 356,
        border: '1px solid #ececec',
        borderRadius: '20px',
        padding: { xs: '10px 15px', md: '40px 50px' },
      }}
    >
      <Box sx={{ display: smallScreen ? 'flex' : 'block', justifyContent: 'center' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          aria-label="scrollable force tabs example"
          orientation={smallScreen ? 'vertical' : 'horizontal'}
          TabIndicatorProps={{
            style: {
              display: 'none',
            },
          }}
        >
          <Tab
            label="Mô tả sản phẩm"
            {...a11yProps(0)}
            sx={{
              border: '1px solid #ececec',
              borderRadius: '20px',
              minHeight: '30px !important',
              height: '40px',
              fontWeight: 700,
              mr: '15px',
              mb: '10px',
            }}
          />
          <Tab
            label="Thông tin bổ sung"
            {...a11yProps(1)}
            sx={{
              border: '1px solid #ececec',
              borderRadius: '20px',
              minHeight: '30px !important',
              height: '40px',
              fontWeight: 700,
              mr: '15px',
              mb: '10px',
            }}
          />
          <Tab
            label="Nhà sản xuất"
            {...a11yProps(2)}
            sx={{
              border: '1px solid #ececec',
              borderRadius: '20px',
              minHeight: '30px !important',
              height: '40px',
              fontWeight: 700,
              mr: '15px',
              mb: '10px',
            }}
          />
          <Tab
            label="Đánh giá (17)"
            {...a11yProps(3)}
            sx={{
              border: '1px solid #ececec',
              borderRadius: '20px',
              minHeight: '30px !important',
              height: '40px',
              fontWeight: 700,
              mr: '15px',
              mb: '10px',
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Editor
          readOnly
          theme={'bubble'}
          modules={{
            toolbar: false,
          }}
          value={data.description}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdditionalInfo data={data} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Vendor />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ReviewDetail />
      </TabPanel>
    </Box>
  );
}
