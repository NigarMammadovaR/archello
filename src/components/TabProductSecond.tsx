
import * as React from 'react';
import { useEffect, useState } from "react";

import image1 from "../styles/images/catmid1.webp";
import image2 from "../styles/images/catmid2.webp";
import image3 from "../styles/images/catmid3.webp";
import image4 from "../styles/images/cat1.webp";
import image5 from "../styles/images/cat2.webp";
import image6 from "../styles/images/cat3.webp";
import image7 from "../styles/images/cat4.webp";
import image8 from "../styles/images/cat5.webp";
import image9 from "../styles/images/cat6.webp";
import image10 from "../styles/images/cat7.webp";
import image11 from "../styles/images/cat8.webp";
import image12 from "../styles/images/cat9.webp";
import image13 from "../styles/images/cat10.webp";
import image14 from "../styles/images/cat11.webp";
import image15 from "../styles/images/cat12.webp";
// import image16 from "../styles/images/cat13.webp";
// import image17 from "../styles/images/cat14.webp";
// import image18 from "../styles/images/cat15.webp";
// import image19 from  "../styles/images/cat16.webp";
// import image20 from "../styles/images/cat17.webp";
// import image21 from "../styles/images/cat18.webp";

// switch
import SwitchControlled from "./Switcher";

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
  { title: 'IDEA' },
  { title: 'Banker Wire' },
  { title: "Alumil S.A" },
];

// end

export default function CartProductSecond() {


  const title = 'array';

  const value = [
    { id: 0, name: 'Aquaria', age: "IDEA", category: 'IDEA', image: image4 },
    { id: 1, name: 'Martelaar', age: "IDEA", category: 'IDEA', image: image5 },
    { id: 2, name: 'Women', age: "2050", category: 'Banker Wire', image: image6 },
    { id: 3, name: 'RFP21 – Open', age: "2050", category: 'IDEA', image: image7 },
    { id: 4, name: 'Sunnei', age: "2050", category: 'IDEA', image: image8 },
    { id: 5, name: 'Kevin Richardson Recording', age: "2050", category: 'Alumil S.A', image: image9 },
    { id: 6, name: 'PENUMBRA', age: "2050", category: 'Banker Wired', image: image10 },
    { id: 7, name: 'Sound Room A', age: "Alumil S.A", category: 'Alumil S.A', image: image11 },
    { id: 8, name: 'Søylerommet', age: "2050", category: 'Banker Wire', image: image12 },
    { id: 9, name: 'Wave Recording VicBooth', age: "2050", category: 'IDEA', image: image13 },
    { id: 10, name: 'HOUSE IN RUA SÃO FRANCISCO', age: "Bak Gordon Arquitectos", category: 'Banker Wire', image: image14 },
    { id: 11, name: 'Ciele athletics flagship store', age: "Alumil S.A", category: "Alumil S.A", image: image15 },
    // { id: 12, name: 'Kevin Richardson Recording', age: "2050", category: 'Alumil S.A', image: image16 },
    // { id: 13, name: 'PENUMBRA', age: "2050", category: 'IDEA', image: image17 },
    { id: 14, name: 'Sound Room A', age: "Alumil S.A", category: 'Alumil S.A', image: image15 },
    // { id: 15, name: 'Søylerommet', age: "Alumil S.A", category: 'Banker Wire', image: image16 },
    // { id: 16, name: 'Wave Recording VicBooth', age: "2050", category: 'Banker Wire', image: image17 },
    // { id: 17, name: 'HOUSE IN RUA SÃO FRANCISCO', age: "IDEA", category: 'Alumil S.A', image: image18 },
    // { id: 18, name: 'Ciele athletics flagship store', age: "svobodová blaha", category: "Banker Wire", image: image19 },
    // { id: 19, name: 'Wave Recording VicBooth', age: "IDEA", category: 'Banker Wire', image: image20 },
    // { id: 20, name: 'HOUSE IN RUA SÃO FRANCISCO', age: "Bak Gordon Arquitectos", category: 'Alumil S.A', image: image21 },
  ];

  const [switchStates, setSwitchStates] = React.useState<{ [key: string]: boolean }>({
    'IDEA': false,
    'Banker Wire': false,
    'Alumil S.A': false,
  });

  const setSwitchState = (category: string, state: boolean) => {
    setSwitchStates(prevState => ({
      ...prevState,
      [category]: state,
    }));
  };

  const filteredCarts = value.filter(cart => {
    if (Object.values(switchStates).every(state => !state)) {
      return true;
    }

    return switchStates[cart.category];
  });

  useEffect(() => {
    const storedNames = localStorage.getItem(title);
    const timestamp = new Date().getTime();
    const uniqueTitle = `${title}-${timestamp}`;
  
    if (storedNames) {
      setSwitchStates(JSON.parse(storedNames));
    } else {
      localStorage.removeItem(title);
      localStorage.setItem(uniqueTitle, JSON.stringify(value));
      const initialSwitchStates = value.reduce<{ [key: string]: boolean }>((acc, cart) => {
        acc[cart.category] = false;
        return acc;
      }, {});
      setSwitchStates(initialSwitchStates);
    }
  }, []);



  return (
    <>
      <div className="flex flex-wrap cart-main">
        {filteredCarts.map(item => (
          <div className="cart" key={item.id}>
            <div className="size">
              <img src={item.image} alt="" />
            </div>
            <h4>{item.name}</h4>
            <p>{item.age}</p>
          </div>
        ))}
      </div>

      <a href="#">
   <div className="middle">
   <h3>Office and Contract in project photos</h3>
  <div className="carts-middle"  >
   <img className="hidden" src={image2} alt="Image 2"  />
   <img src={image1} alt="Image 1" />
   <img src={image3} alt="Image 3"  />
 </div>
   <p>  All • 2935 Photos</p>
   </div>
  </a>
    </>
  );
}




