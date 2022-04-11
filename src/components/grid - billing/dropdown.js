import React from 'react';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

const Dropdown = ({ columnMenuShow, column, handleShowColumn }) => {
  return (
    <Box sx={{ pl: 2, pr: 2 }}>
      <Collapse in={columnMenuShow}>
        <Stack sx={{ display: 'flex', justifyContent: 'space-between' }} direction="row">
          {Object.keys(column).map((key, index) => (
            <FormControlLabel
              key={key + index}
              value={key}
              control={<Checkbox checked={column[key]} onChange={(e) => handleShowColumn(e, key)} />}
              label={key.toUpperCase()}
              labelPlacement="start"
            />
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
};

export default Dropdown;
