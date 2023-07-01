import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import MyLocationIcon from '@mui/icons-material/MyLocation';


const names = [
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
  ];


export default function SelectOtherProps() {
    const [personName, setPersonName] = React.useState<string[]>([]);
    const handleChangeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const { options } = event.target;
      const value: string[] = [];
      for (let i = 0, l = options.length; i < l; i += 1) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      setPersonName(value);
    };
  




  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl required sx={{ m: 1, minWidth:270 }}>
        <InputLabel id="demo-simple-select-required-label">Select a year</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
          <Paper
          component="form"
          sx={{ p: '1px 1px', display: 'flex', alignItems: 'center', width: 283, height: 40, border: "1px solid #989ca8a3", borderRadius: "10px" }}
    >
       <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      
    </Paper>
          </MenuItem>

          <FormControl sx={{ m: 1, minWidth: 90, maxWidth: 270 }}>
        <InputLabel shrink htmlFor="select-multiple-native">
            year
        </InputLabel>
        <Select
        sx={{ width: 285 }}
          multiple
          native
          value={personName}
          // @ts-ignore Typings are not considering `native`
          onChange={handleChangeMultiple}
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    
        </Select>

      </FormControl>
    </div>
  );
}