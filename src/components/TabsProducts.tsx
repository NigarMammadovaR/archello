import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CartProduct from './CartProduct';
// import Cart from '../Card';
// import CardContinue from '../CardContinue';
import image1 from "../../styles/images/middle.webp";
import image2 from "../../styles/images/middle1.webp";
import image3 from "../../styles/images/middle2.webp";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import CartProductSecond from './TabProductSecond';



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

export default function BasicTabsProduct() {

  
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="w-full">
          <Tab label="Products" {...a11yProps(0)} />
          <Tab label="Categories" {...a11yProps(1)}  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CartProduct/>
    <div className="list flex justify-center " >
    <a href="#">
      <p className='first'>1</p>
      </a>
      <a href="#">
      <p>2</p>
      </a>
      <a href="#">
      <p>3</p>
      </a>
      <a href="#">
      <p>4</p>
      </a>
      <a href="#">
      <p>5</p>
      </a>
      <a href="#">
      <p>...</p>
      </a>
      <a href="#">
      <p className='last'>2930</p>
      </a>
      <a href="#" className='arrow'>
        <p>
        <FontAwesomeIcon icon={faArrowRight} />
        </p>
     
      </a>
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
    <CartProductSecond/>
      </TabPanel>
       

    </Box>
  );
}

