import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import MyLocationIcon from '@mui/icons-material/MyLocation';


import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


export default function Search() {
  return (
    <Paper
      component="form"
      sx={{ p: '1px 1px', display: 'flex', alignItems: 'center', width: 283, height: 40, border: "1px solid #989ca8a3", borderRadius: "10px" }}
    >
       <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search location"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
      <Tooltip title="Use My Current Location" placement="top" arrow>
         <IconButton >
       <MyLocationIcon/>
      </IconButton>
      </Tooltip>
    </Paper>
  );
}