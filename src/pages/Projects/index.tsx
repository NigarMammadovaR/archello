import image from "../../styles/images/logo.svg";
import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Search from "../../components/Search";
import SelectOtherProps from "../../components/Select";
import RadioButtonsGroup from "../../components/Radio";


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


import BasicTabs from "../../components/TabProjects";

import Footer from "../../components/Footer";
// new
interface ActiveStates {
  [key: string]: boolean;
}

const Projects = () => {
  const [showDrop, setShowDrop] = useState (false);
  const [isOpen, setIsOpen] = useState(false);


// filter
const [accordionVisible, setAccordionVisible] = useState(false);

  const handleFilterClick = () => {
    setAccordionVisible(!accordionVisible);
  };

// end
  function openClose() {
    setShowDrop(false);

  }



  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };


  // new header
  const location = useLocation();
  const [activeStates, setActiveStates] = useState<ActiveStates>({});
  
  useEffect(() => {
    setActiveStates((prevActiveStates) => ({
      ...prevActiveStates,
      [location.pathname]: true
    }));
  }, [location]);

  const toggleClass = (key: string) => {
    setActiveStates((prevActiveStates) => ({
      ...prevActiveStates,
      [key]: !prevActiveStates[key]
    }));
  };


  return (
  <>
  <nav id="dropDown" 
  style={{display: showDrop ? 'block' : 'none'}} 
 
  >
    <ul className="flex flex-col">
                <li> 
                <a href="/"className="font-bold">Home</a>
                </li>
                <li className="" >
                <a href="/projects" >Projects</a>
                </li>
                <li className="">
                <a href="/products">Products</a>
                </li>
                <li className="">
                <a href="#">Inspiration</a>
                </li>
                <li className="">
                <a href="#">Manufacturers</a>
                </li>
                <li className="">
                <a href="#">Firms</a>
                </li>
                <li className="">
                <a href="#">News</a>
                </li>
                <li className="">
                <a href="#">Drawings</a> 
                </li>
                <div className="signMenu">
                  <li className="">
                <a href="#">Sign in</a> 
                </li>
                <li className="upSign">
                <a href="#">Sign up</a> 
                </li>
                </div>
        
    </ul>
    </nav>
    
    <div id="wrapper" 
    className={showDrop ? 'transform' : ''}
    >
    <header className="flex justify-between items-center"
    //  onClick={openClose}
    >
    <div className="container-fluid flex justify-between ">
    <div className="mobileMenu"
   >
    <svg
    className="burgerIcon"
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em" 
      // onClick={openClose}
      onClick={() => setShowDrop((showDrop) => !showDrop)}

    >
     <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={48}
        d="M88 152h336M88 256h336M88 360h336"
      />
    </svg>
    </div> 
        <nav>
            <ul className="flex">
                <li onClick={() => toggleClass("/")}>
                <Link 
                to={"/"} 
                // className="font-bold active"
                className={activeStates["/"] ? "active" : ""}
          
                >Home</Link>
                </li>
                <li className="ml-3 " id="projects" onClick={() => toggleClass("projects")}>
                <Link 
                to={"/projects"}
                className={activeStates["/projects"] ? "active" : ""}
               
                >Projects</Link>
                <ul className="dropdownProjects" >
                   <li className="all">All projects
                   <div className="rightAll">
                      <h4>MOST SEARCHED COUNTRIES</h4>
                      <div className="top-countries">
                      <div className="europe">
                      <h4>Europe</h4>
                      <ul>
                      <li>Austria</li>
                      <li>France</li>
                      <li>Germany</li>
                      <li>Italy</li>
                      <li>Netherlands</li>
                      <li>Portugal</li>
                      <li>Spain</li>
                      <li>Switzerland</li>
                      <li>UnitedKingdom</li>
                    </ul>
                   </div>
                   <div className="america">
                    <h4>The Americas</h4>
                    <ul>
                      <li>Argentina</li>
                      <li>Brazil</li>
                      <li>Canada</li>
                      <li>Mexico</li>
                      <li>UnitedStates</li>
                    </ul>
                   </div>
                   <div className="asia">
                    <h4>Asia</h4>
                    <ul>
                      <li>China</li>
                      <li>India</li>
                      <li>Japan</li>
                       <li>Singapore</li>
                      <li>SouthKorea</li>
                      <li>Taiwan</li>
                      <li>Thailand</li>
                    </ul>
                   </div>
                   <div className="ocenia">
                    <h4>Ocenia</h4>
                    <ul>
                      <li>Australia</li>
                      <li>NewZealand</li>
                    </ul>
                   </div>    
                      </div>
                   </div>      
                   </li>
                   <li className="countries">Countries</li>
                   <li>Commercial</li>
                   <li>Landscape</li>
                   <li>Urban Planning</li>
                   <li>Industrial</li>
                   <li>Transport and Infrastructure</li>
                   <li>Governmen and Health</li>
                   <li>Educational</li>
                   <li>Recreational</li>
                   <li>Cultural</li>
                   <li>Religious</li>
                   <li>Residential</li>        
                  </ul>
                </li>
                <li className="ml-3 newDrop"  id="projects" onClick={() => toggleClass("/products")}>
                <Link    
                to={"/products"}
                className={activeStates["/products"] ? "active" : ""}
                >Products</Link>
                <ul className="dropdownProjects productDropDown" >
                   <li className="all">All products
                   <div className="rightAll">
                      <div className="top-countries flex w-full">
                      <div className="europe w-3/6">
                      <h4>Facade cladding</h4>
                      <ul>
                      <li>Brick cladding</li>
                      <li>Wood cladding</li>
                      <li>Metal cladding</li>
                      <li>Ceramic cladding</li>
                      <li>Concrete cladding</li>
                      <li>Stone cladding</li>
                      <li>Composite cladding</li>
                      <li>Metal mesh cladding</li>
                      <li>Plastic cladding</li>
                      <li>Exterior finishes</li>
                      <li>3D wall cladding</li>
                    </ul>
                   </div>
                   <div className="america w-3/6">
                    <h4>Facade systems</h4>
                    <ul>
                      <li>Living walls</li>
                      <li>Concrete facades</li>
                      <li>Continuous facade systems</li>
                      <li>Sun protection</li>
                      <li>UnitedStates</li>
                      <li>Curtain walls</li>
                      <li>Facade support structures</li>
                    </ul>
                   </div>  
                      </div>
                   </div>      
                   </li>
                   <li className="countries">Facades</li>
                   <li>Windows and Doors</li>
                   <li>Inner Walls and Ceilings</li>
                   <li>Floors and Stairs</li>
                   <li>Roofs</li>
                   <li>Electrical</li>
                   <li>Tech</li>
                   <li>Bathroom and Kitchens</li>
                   <li>Lighting</li>
                   <li>Furtinure</li>
                   <li>Office and Contract</li>
                   <li>Outdoor</li>        
                </ul>
                </li>
                <li className="ml-3">
                <a href="#">Inspiration</a>
                </li>
                <li className="ml-3">
                <a href="#">Manufacturers</a>
                </li>
                <li className="ml-3">
                <a href="#">Firms</a>
                </li>
                <li className="active ml-3">
                <a href="#">News</a>
                </li>
                <li className="ml-1">
                <a href="#">
                <Tooltip style={mystyle} TransitionComponent={Zoom} title="Drawings">
                <Button style={{backgroundColor: "white"}}> 
                <i className="material-icons" style={{fontSize: "18px"}}>more_horiz</i>
                 </Button>
                 </Tooltip>
                </a> 
                </li>
                <div className="animation start-home"></div>
            </ul>
        </nav>
        <div className="logo w-24 mb-2" >
            <a href="#">
            <img src={image} alt="" />
            </a>
        </div>
        <div className="sign mr-3">
            <ul className="flex">
                <li className="language">
                <Tooltip title="English" arrow> 
                <Button style={{backgroundColor: "white", color:"#838792"}}>EN</Button>
                </Tooltip> 
               
                </li>
                <li className="ml-6 mt-1.5">
                <a href="#" className="font-black text-sm">Search 
                <i className="fa fa-search ml-3" style={{fontSize:"18px"}}></i>
                </a>
                </li>
                <li className="ml-6 mt-1.5	">
                <a href="#" className="font-black text-sm signin" >Sign in</a>
                </li>
                <li className="ml-1.5 singup">
                <a href="#">SIGN UP FREE</a>
                </li>
            </ul>
        </div> 
        <i className="fa fa-search ml-3 search" style={{fontSize:"18px"}}></i>
    </div>   
    </header>

<div className="header-top-hide"
 onClick={openClose}
>
  <ul>
    <li onClick={handleFilterClick}>
      Filter
    </li>
    <li>
    </li>

  </ul>
</div>
    <div className="header-bottom"
       onClick={openClose}>
      <div className="container flex">
      <h2>Projects</h2>
      <span>All Projects {'>'} 104883 results</span>
    </div>
      </div>
    <div className="container-projects " 
     onClick={openClose}>
      <div className="container flex">
      <div className={`accordion ${accordionVisible ? 'show' : ''}`}>
        <h2>Filters</h2>
        <button className="exit" onClick={handleFilterClick} >X</button>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Industries</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li>Commercial</li>
              <li>Landscape</li>
              <li>Urban Planning</li>
              <li>Industrial</li>
              <li>Transport and Infrastructure</li>
              <li>Government and Health</li>
              <li>Educational</li>
              <li>Recreational</li>
              <li>Cultural</li>
              <li>Religious</li>
              <li>Residential</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <Search/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Building Year</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <SelectOtherProps/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Project Status</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <RadioButtonsGroup/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Themes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="BEST OF 2020" control={<Radio />} label="BEST OF 2020" />
        <FormControlLabel value="BEST OF 2021" control={<Radio />} label="BEST OF 2021" />
        <FormControlLabel value="BEST OF 2022" control={<Radio />} label="BEST OF 2022" />
      </RadioGroup>
    </FormControl>
          </Typography>
        </AccordionDetails>
      </Accordion>
  
      </div>

      <div className="project-cards">
        <BasicTabs/>
      </div>
     
      </div>
 

    </div>
    <Footer/>
    </div>
  
  </>
  )
}

export default Projects;
