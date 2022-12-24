import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { SyntheticEvent, useState } from 'react';
import { AdditionalInfo } from './AdditionalInfo';
import { Vendor } from './Vendor';
import { ReviewDetail } from './ReviewDetail';
import { useMediaQuery } from '@mui/material';

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
          <Typography>{children}</Typography>
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

export function TabsDesc() {
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
        padding: { sx: '10px 15px', md: '40px 50px' },
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
        Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal
        goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly
        neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this
        that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent
        fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious
        goldfinch mastodon goodness gnashed a jellyfish and one however because. Type Of Packing Bottle Color Green,
        Pink, Powder Blue, Purple Quantity Per Case 100ml Ethyl Alcohol 70% Piece In One Carton Laconic overheard dear
        woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes
        minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers
        beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez
        enchanting drunkenly more much wow callously irrespective limpet. Packaging & Delivery Less lion goodness that
        euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due
        one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung
        anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly. Scallop or far
        crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow
        this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering
        for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose
        jeepers outgrew lugubrious luridly irrationally attractively dachshund. Suggested Use Refrigeration not
        necessary. Stir before serving Other Ingredients Organic raw pecans, organic raw cashews. This butter was
        produced using a LTG (Low Temperature Grinding) process Made in machinery that processes tree nuts but does not
        process peanuts, gluten, dairy or soy Warnings Oil separation occurs naturally. May contain pieces of shell.
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdditionalInfo />
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
