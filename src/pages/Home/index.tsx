import image from "../../styles/images/logo.svg";
import image1 from "../../styles/images/one.webp";
import image2 from "../../styles/images/two.webp";
import image3 from "../../styles/images/three.webp";
import image4 from "../../styles/images/four.webp";
import image5 from "../../styles/images/five.jpg";
import sofa from "../../styles/images/sofa.webp";
import building from "../../styles/images/building.webp";
import lamp from "../../styles/images/lamp.jpg";
import school from "../../styles/images/school.webp";
import c from "../../styles/images/c.webp";
import sky from "../../styles/images/sky.jpg";
// import pinpoint from "../../styles/images/pinpoint.webp";
import project from "../../styles/images/project.webp";
import proj1 from "../../styles/images/proj1.webp";
import proj2 from "../../styles/images/proj2.webp";
import proj3 from "../../styles/images/proj3.webp";
import proj4 from "../../styles/images/proj4.webp";


import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';



import Carousel from "../../components/Carousel";
import { ThemeConsumer } from "styled-components";
import { positions } from "@mui/system";



// interface PropsSvg {
//   className: string;
//   viewBox: string;
//   fill: string;
//   height: string;
//   width: string;
//   onClick: () => void;
  
// 


// new
interface ActiveStates {
  [key: string]: boolean;
}


const Home = () => {
  const [showDrop, setShowDrop] = useState (false);



  const [isOpen, setIsOpen] = useState(false);

  function openClose() {
    setShowDrop(false);

  }

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        // zIndex: theme.zIndex.drawer + 1,
        // position: "fixed",
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
  style={{display: showDrop ? 'block' : 'none'}} >
    <ul className="flex flex-col">
                <li>
                <a href="/" className="font-bold">Home</a>
                </li>
                <li className="">
                <a href="/projects">Projects</a>
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
    <header className="flex justify-between items-center">
    <div className="container-fluid flex justify-between">
    <div className="mobileMenu">
    <svg
    className="burgerIcon"
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em" 
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
                //  className="font-bold active"
                className={activeStates["/"] ? "active" : ""}
                >Home</Link>
                </li>
                <li className="ml-3 " id="projects" onClick={() => toggleClass("projects")}>
                <Link
                 to={"/projects"}
                 className={activeStates["/projects"] ? "active" : ""}>Projects</Link>
                <ul className="dropdownProjects">
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
  
      {/* <div className="container-fluidd">
      <div className="dropdownProjects">
        <ul>
                   <li className="all">All projects</li>
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
      </div>      
     </div> */}
    <section className='trending'
      onClick={openClose}>
    <div className="container">
   
   <ul className="mt-10 flex justify-between trend"> 
    <li>
      <p>Trending News</p>
      <a href="#">
      <div className="size">
        <img src={image1} alt="" />
        </div>
        
      <span>Atelier du Pont constructs its new Paris-based home in wood</span>
    </a>
    </li>
    <li >
    <p>Inspiration</p>
    <a href="#">
    <div className="size">
        <img src={image2} alt="" />
        </div>
      <span>KN Next by SARC Architects</span>
    </a>
    </li>
    <li >
    <p>Project & Spec</p>
    <a href="#">
    <div className="size">
        <img src={image3} alt="" />
        </div>
      <span>The Break Residence</span>
      </a>
    </li>
    <li>
    <p>Spotlight</p>
    <a href="#">
    <div className="size">
        <img src={image4} alt="" />
        </div>
      <span>Rockpanel Metals by Rockpanel</span>
    </a>
    </li>
    <li>
    <p>How it's made</p>
    <a href="#">
    <div className="size">
        <img src={image5} alt="" />
      </div>
      <span>JL House</span>
    </a>
    </li>
   </ul>
    </div>
    </section>
    <section className="news" onClick={openClose}>
      <div className="container flex flex-wrap">
        <ul className=" mt-14 flex justify-between flex-wrap">
          <li className="w-2/4 pr-3.5	">
          <a href="#">
            <div className="zoom">
              <img src={sofa} alt="" />
              </div>
              <span className="update">4 hours ago • <a href="#">News</a></span>  
            <h1>The best of Salone del Mobile 2023 (part I)</h1>
          </a>
          <p>In a return to htmlForm, the 61st edition of the Salone del Mobile featured more than 2,000 exhibiting brands from around the world. Over the course of its 6 day period, the celebrated exhibition welcomed in excess of 300,000 attendees to the Fiera Milan... 
            <a href="#" className="more"> More{'>'}</a></p>
          </li>
          <li className="w-2/4 pr-3.5	">
          <a href="#">
            <div className="zoom">
              <img src={building} alt="" />
            </div>
            <span className="update">8 hours ago • <a href="#">News</a></span>
            <h1>25 best architecture firms in San Francisco</h1>
          </a>
          <p>Set against a backdrop of rolling hills and glittering waters of the San Francisco Bay, the city has witnessed an array of influences over the years, from the iconic Victorian-era homes lining the street with bay windows, ornate mouldings and colourf... 
            <a href="#" className="more"> More{'>'}</a></p>
          </li>
        </ul>
      </div>
    </section>
    <section className="trio">
      <div className="container flex flex-wrap">
        <ul className=" mt-14 flex justify-between flex-wrap">
          <li className="w-1/3 pr-3.5	">
          <a href="#">
            <div className="zoom">
              <img src={lamp} alt="" />
              </div>
              <span className="update">4 May 2023 • <a href="#">News</a></span>  
            <h1>The best of Euroluce 2023 (part II)</h1>
          </a>
          <p>Continuing with Archello’s pick of the best luminaires from Euroluce 2023, the lamps listed here capture the diversity of collections presented by lighting brands. Each lamp is made with technological know-how and artisanal flair, with designs... 
            <a href="#" className="more"> More{'>'}</a></p>
          </li>
          <li className="w-1/3	pr-3.5	">
          <a href="#">
            <div className="zoom">
              <img src={school} alt="" />
            </div>
            <span className="update">3 May 2023 • <a href="#">News</a></span>
            <h1>Wooden residential building htmlForms new termination of building block at Kaappark</h1>
          </a>
          <p>Set against a backdrop of rolling hills and glittering waters of the San Francisco Bay...On the edge of Kaappark in Rotterdam, residential building The Wooden Head was recently completed. Designed by Architectuur MAKEN, the wooden building consists of three stacked apartments and htmlForms the new termination of an existing building block. T...
            <a href="#" className="more"> More{'>'}</a></p>
          </li>
          <li className="w-1/3 pr-3.5	">
          <a href="#">
            <div className="zoom">
              <img src={c} alt="" />
            </div>
            <span className="update">3 May 2023 • <a href="#">News</a></span>
            <h1>The best of Euroluce 2023 (part I)</h1>
          </a>
          <p>Euroluce is Salone del Mobile’s biennial extravaganza of lighting design and a main attraction of Salone 2023. Presenting lighting solutions htmlFor the home, workplace, hospitality, retail, public spaces, and more, Euroluce is a veritable wellspri...
            <a href="#" className="more"> More{'>'}</a></p>
          </li>
        </ul>
      </div>
    </section>
    <section className="skyPark">
      <div className="container">
        <ul className="flex flex-wrap justify-between">
          <li className="w-7/12 p-2	">
            <a href="">
              <img src={sky} alt="" />
              <div className="pinpoint pinpoint-warning">
              </div>
              <div className="popover flex flex-row">
                <div className="arrow"></div>
                <div className="popover-content">
                 <p>Ceilings</p>
                 <span>By Kriskadecor</span>
                </div>
               
              </div>
            </a>
            <a href="" >
            Sky Park by Elval Colour
            </a>
          </li>
          <li className="w-2/5" >
            <h1 className="text-start">Find products by looking at inspirational projects</h1>
            <p className="text-start">Inspiration: Archello’s Spec Reference Guide allows Architects to source materials by looking at products applied in realized projects. The Guide gives a quick overview of how the product looks in a wide range of different projects.</p>
            <a href="#" className="w-full button">Browse inspiration</a>
            <a href="#"className="w-full forFree">Sign Up for Free</a>
          </li>
        </ul>
      </div>
    </section>
    <section className="projects">
      <div className="container">
        <h1>Projects + Specs</h1>
        <ul className="project-section flex" >
          <li className="project-left w-3/5	">
           <a href="#" className="img-top">
            <div className="size">
            <img src={project} alt="" />
            </div> 
           </a>
            <div className="quad flex ">
            <a href="#">
            <div className="size h-full	">
            <img src={proj1} alt="" />
            </div> 
           </a>
           <a href="#">
            <div className="size h-full">
            <img src={proj2} alt="" />
            </div> 
           </a>
           <a href="#">
            <div className="size h-full">
            <img src={proj3} alt="" />
            </div> 
           </a>
           <a href="#">
            <div className="size h-full">
            <img src={proj4} alt="" />
            </div> 
           </a>
            </div>
            {/* slider */}
<div className="slider-container">
  <div className="slider">
    <div className="slides">
      <div id="slides__1" className="slide">
        <span className="slide__text">
          <img src={project} alt="" />
        </span>
      </div>
      <div id="slides__2" className="slide">
        <span className="slide__text">
          <img src={proj1} alt="" />
        </span>

      </div>
      <div id="slides__3" className="slide">
        <span className="slide__text">
        <img src={proj2} alt="" />
        </span>
      </div>
      <div id="slides__4" className="slide">
        <span className="slide__text">
        <img src={proj3} alt="" />
        </span>
      </div>
      <div id="slides__5" className="slide">
        <span className="slide__text">
        <img src={proj4} alt="" />
        </span>
      </div>
    </div>
    <div className="slider__nav">
      <a className="slider__navlink" href="#slides__1"></a>
      <a className="slider__navlink"  href="#slides__2"></a>
      <a className="slider__navlink"  href="#slides__3"></a>
      <a className="slider__navlink"  href="#slides__4" ></a>
      <a className="slider__navlink"  href="#slides__5"></a>
    </div>
  </div>
</div>
 </li>
{/* sliderin sonur */}
         
          <li className="project-right w-2/5 p-5">
            <a href="#"><h1>Nubank</h1></a>
            <a href="#"><span>By LP+A Arquitetura • Offices • Brazil</span></a>
            <p>With the current scenario, companies have had to rethink the purpose of their offices, which have gone from simple workspaces to infrastructures that help build social capital, promoting a sense of purpose and belonging. In this sense, Fintech Nubank...
            <a href="#" className="more"> More {'>'}</a> 
            </p>
            <div className="table-right">
              <div className="table-header flex justify-between">
              <span >Product Spec Sheet</span>
              <a href="#">View All{'>'}</a>
              </div>   
              <div className="table-bottom flex flex-col">
                <div className="topic flex flex-col">
                <span>Manufacturers</span>
                <a href="">Suvinil</a>
                </div>
                <div className="topic flex flex-col">
                <span>Furniture</span>
                <a href="">Alfalux</a>
                </div>
                <div className="topic flex flex-col">
                <span>Manufacturers</span>
                <a href="">Deca</a>
                </div>
                <div className="topic flex flex-col">
                <span>Manufacturers</span>
                <a href="">Desmobilia</a>
                </div>
                <div className="topic flex flex-col">
                <span>Manufacturers</span>
                <a href="">Escinter</a>
                </div>
                <div className="topic flex flex-col">
                <span>Furniture</span>
                <a href="">Fernando Jaeger</a>
                </div>
              </div>
              </div>
           
          </li>
        </ul>
      </div>
    </section>
    <section className="spotlight">
      <div className="container">
        <Carousel/>
      </div>
    </section>
    </div> 
  
    
    </>
  )
}

export default Home;