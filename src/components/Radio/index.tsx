import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Conceptualization" control={<Radio />} label="Conceptualization" />
        <FormControlLabel value="Proposed" control={<Radio />} label="Proposed" />
        <FormControlLabel value="Planned" control={<Radio />} label="Planned" />
        <FormControlLabel value="Ground breaking" control={<Radio />} label="Ground breaking" />
        <FormControlLabel value="Build completed" control={<Radio />} label="Build completed" />
        <FormControlLabel value="Vacant" control={<Radio />} label="Vacant" />
        <FormControlLabel value="Occupied" control={<Radio />} label="Occupied" />
        <FormControlLabel value="Demolished" control={<Radio />} label="Demolished" />

      </RadioGroup>
    </FormControl>
  );
}