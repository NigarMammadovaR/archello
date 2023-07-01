import { useEffect, useState } from "react";

import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import continue1 from "../styles/images/continue1.webp";
import continue2 from "../styles/images/2.webp";
import continue3 from "../styles/images/3.webp";
import continue4 from "../styles/images/4.webp";
import continue5 from "../styles/images/5.webp";
import continue6 from "../styles/images/6.webp";
import continue7 from "../styles/images/7.webp";
import continue8 from "../styles/images/8.webp";
import continue9 from "../styles/images/9.webp";
import continue10 from "../styles/images/10.webp";
import continue11 from "../styles/images/11.webp";
import continue12 from "../styles/images/12.webp";


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


// end



function CardContinue() {

// modal
const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
// end

  const title = 'array';
  const value = [
    { id: 0, name: 'Aquaria', age: "2050", image: continue1 },
    { id: 1, name: 'Martelaar', age: "Machteld D'Hollander", image: continue2 },
    { id: 2, name: 'Women', age: "2050", image: continue3 },
    { id: 3, name: 'RFP21 – Open', age: "2050", image: continue4 },
    { id: 4, name: 'Sunnei', age: "2050", image: continue5 },
    { id: 5, name: 'Kevin Richardson Recording', age: "2050", image: continue6 },
    { id: 6, name: 'PENUMBRA', age: "2050", image: continue7 },
    { id: 7, name: 'Sound Room A', age: "2050", image: continue8 },
    { id: 8, name: 'Søylerommet', age: "2050", image: continue9 },
    { id: 6, name: 'Wave Recording VicBooth', age: "2050", image: continue10 },
    { id: 7, name: 'HOUSE IN RUA SÃO FRANCISCO', age: "Bak Gordon Arquitectos", image: continue11 },
    { id: 8, name: 'Ciele athletics flagship store', age: "svobodová blaha", image: continue12 },

  ];

  const [count, setCount] = useState<{ id: number; name: string; age: string; image: string; }[]>([]);

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
  

  return (
    <div className="flex flex-wrap cart-main">
      {count.map((item) => (
        <div className="cart">
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
    </div>
  );
}

export default CardContinue;