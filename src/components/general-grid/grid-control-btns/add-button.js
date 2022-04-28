import React from 'react';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddButton = ({ children, ...rest }) => {
  return (
    <Button startIcon={<AddCircleIcon />} {...rest} variant="contained">
      {children}
    </Button>
  );
};

export default AddButton;
