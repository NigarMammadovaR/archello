import { useEffect, useState } from "react";

import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import image1 from "../styles/images/-tridente-boyce-micro-x-factories-archello.1686015750.6116.webp";
import image2 from "../styles/images/-tridente-boyce-craigmore-high-school-stem-secondary-schools-archello.1686014988.619.webp";
import image3 from "../styles/images/-tridente-boyce-micro-x-factories-archello.1686015750.6116.webp";
import image4 from "../styles/images/2050--sunnei-warehouses-archello.1686143155.081.webp";
import image5 from "../styles/images/2050--the-horizon--revive-the-spirit-of-mosul-exhibition-centres-archello.1686139993.765.webp";
import image6 from "../styles/images/marinepeyre-editions-etude-notariale-damien-gousseau-offices-archello.1685954598.4392.webp";
import image7 from "../styles/images/some-thoughts-bananain-concept-store-beijing-shops-archello.1686148378.2385.webp";
import image8 from "../styles/images/vicoustic-kevin-richardson-recording-studio-private-houses-archello.1686141499.7981.webp";
import image9 from "../styles/images/2050--ffp21-----open-exhibition-centres-archello.1686145131.7048.webp";
import image10 from "../styles/images/proj.webp";
import image11 from "../styles/images/pr.webp";
import image12 from "../styles/images/proje.webp";



// log in page
import SignIn from "./Login";

// modal
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// sort

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

// end

const style = {
  position: 'absolute' as 'absolute',
  top: '55%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 530,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


// sort

interface FilmOptionType {
  title: string;
 
}
const top100Films = [
  { title: 'Recently Added',  },
  { title: 'Featured',},
  { title: "How It's Made", },
  { title: 'Most stories', },
];

// end


function Cart() {

// modal
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
// end

// sort
const defaultProps = {
  options: top100Films,
  getOptionLabel: (option: FilmOptionType) => option.title,
};
const flatProps = {
  options: top100Films.map((option) => option.title),
};
const [valueSort, setValueSort] = React.useState<FilmOptionType | null>(null);

// end

  const title = 'array';


    const value = [
      { id: 0, name: 'Aquaria', age: "2050", category: 'Recently Added', image: image1 },
      { id: 1, name: 'Martelaar', age: "Machteld D'Hollander", category: 'Most stories', image: image2 },
      { id: 2, name: 'Women', age: "2050", category: 'Recently Added', image: image3 },
      { id: 3, name: 'RFP21 – Open', age: "2050", category: 'Recently Added', image: image4 },
      { id: 4, name: 'Sunnei', age: "2050", category: 'Featured', image: image5 },
      { id: 5, name: 'Kevin Richardson Recording', age: "2050", category: 'Recently Added', image: image6 },
      { id: 6, name: 'PENUMBRA', age: "2050", category: 'Recently Added', image: image7 },
      { id: 7, name: 'Sound Room A', age: "2050", category:'Recently Added', image: image8 },
      { id: 8, name: 'Søylerommet', age: "2050", category: 'Recently Added', image: image9 },
      { id: 6, name: 'Wave Recording VicBooth', age: "2050", category: 'Recently Added', image: image10 },
      { id: 7, name: 'HOUSE IN RUA SÃO FRANCISCO', age: "Bak Gordon Arquitectos", category: 'Featured', image: image11 },
      { id: 8, name: 'Ciele athletics flagship store', age: "svobodová blaha", category: "How It's Made", image: image12 },

    ];


  const [count, setCount] = useState<{ id: number; name: string; age: string; image: string; category: string; }[]>([]);


  const [selectedCategory, setSelectedCategory] = useState<FilmOptionType | null>(null);




  useEffect(() => {
    const storedNames = localStorage.getItem(title);
    const timestamp = new Date().getTime();
    const uniqueTitle = `${title}-${timestamp}`;
  
    if (storedNames) {
      setCount(JSON.parse(storedNames));
      console.log(storedNames);
    } else {
      localStorage.removeItem(title); 
      localStorage.setItem(uniqueTitle, JSON.stringify(value));
      setCount(value);
      console.log(value);
    }
  }, []);
  


  const handleCategoryChange = (event: React.ChangeEvent<{}>, value: FilmOptionType | null) => {
    setSelectedCategory(value);
  };

  const filteredCarts = selectedCategory
    ? count.filter((cart) => cart.category === selectedCategory.title)
    : count;




  return (
    <>
   <div className="flex flex-wrap cart-main">
        {filteredCarts.map((item) => (
          <div className="cart" key={item.id}>
            <div className="size">
              <img src={item.image} alt="" />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faHeart} onClick={handleOpen} />
            </div>
            <h4>{item.name}</h4>
            <p>{item.age}</p>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <SignIn/>
          </Box>
        </Fade>
      </Modal>
          </div>
        ))}
        <div className="sort-options">
          <Stack spacing={1} sx={{ width: 300 }}>
            <Autocomplete
              options={top100Films}
              getOptionLabel={(option: FilmOptionType) => option.title}
              onChange={handleCategoryChange}
              renderInput={(params) => (
                <TextField {...params} label="Sort by" variant="standard" />
              )}
            />
          </Stack>
        </div>
      </div>

    </>
  );
}

export default Cart;