import image from "../styles/images/GL.svg";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaPinterestP, FaLinkedin} from "react-icons/fa";


import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(1),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#080f26',
    // border: '1px solid #ced4da',
    fontSize: 16,
    color: '#fff',
    // padding: '10px -26px -80px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#080f26',
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));








const Footer = () => {

    const [age, setAge] = React.useState('');
    const handleChange = (event: { target: { value: string } }) => {
      setAge(event.target.value);
    };


  return (
    <>
    <footer>
        <div className="container">
              <div className="footer-top flex justify-between flex-wrap">
             <div>
            <p>Discover</p>
            <ul>
                <li>   <a href="/">Home</a></li>
                <li>   <a href="/projects">Projects</a></li>
                <li>   <a href="/products">Products</a></li>
                <li>   <a href="#"></a>Inspiration</li>
                <li>   <a href="#">Manufactures</a></li>
                <li>   <a href="#">Firms</a></li>
                <li>   <a href="#">News</a></li>
                <li>   <a href="#">Awards</a></li>
                <li>   <a href="#">Events</a></li>
                <li>   <a href="#">Collections</a></li>
                <li>   <a href="#">Drawings</a></li>
            </ul>
        </div>
        <div>
            <p>Archello</p>
            <ul>
                <li>   <a href="#">About</a></li>
                <li>   <a href="#">For Architects</a></li>
                <li>   <a href="#">For Manufacturers</a></li>
                <li>   <a href="#">Specifier</a></li>
                <li>   <a href="#">Brand Resources</a></li>
                <li>   <a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="social mr-36 flex flex-col" >
            
                <p>Connect with</p>
                <ul className="flex">
                <li><a href="#"><FaFacebookSquare /></a></li>
                <li><a href="#"><FaTwitterSquare/></a></li>
                <li> <a href="#"><FaInstagramSquare/></a> </li>
                <li>  <a href="#"><FaPinterestP/></a></li>
                <li>  <a href="#"><FaLinkedin/></a> </li>
            </ul>
            <a className="btn" href="#">Manufactures join here</a>
        </div>
        </div>
       <div className="footer-bottom flex justify-between flex-wrap">
        <div>
            <ul className="flex">
             <li>© 2023 Archello</li>
             <li><a href="#">Terms</a></li>
             <li><a href="#">Privacy</a></li>
            </ul>
        </div>
        <div>
            <ul className="flex flex-wrap ">
                <li className="flex"><img  className="mt-3.5" src={image} alt="" /> 
                <span className="pt-3"> Global</span> 
            
      <FormControl sx={{ m: 0}} variant="standard">
        <InputLabel id="demo-customized-select-label"></InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
        //   value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={10}>Australia</MenuItem>
          <MenuItem value={20}>Brazil</MenuItem>
          <MenuItem value={30}>Canada</MenuItem>
          <MenuItem value={40}>France</MenuItem>
          <MenuItem value={50}>Global</MenuItem>
          <MenuItem value={60}>India</MenuItem>
          <MenuItem value={70}>USA</MenuItem>
        </Select>
      </FormControl>
                
                </li>
                <li className="flex">
                <span className="pt-3">Language: English</span>
     <FormControl sx={{ m: 0 }} variant="standard">
        <InputLabel id="demo-customized-select-label"></InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
        //   value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={10}>Deutsch</MenuItem>
          <MenuItem value={20}>Espanol</MenuItem>
          <MenuItem value={30}>Francais</MenuItem>
          <MenuItem value={40}>Italiano</MenuItem>
          <MenuItem value={50}>Nederlands</MenuItem>
          <MenuItem value={60}>Portugues</MenuItem>
        </Select>
      </FormControl>
                </li>
            </ul>
        </div>
       </div>  
        </div>
    
    </footer>
    </>
  )
}

export default Footer