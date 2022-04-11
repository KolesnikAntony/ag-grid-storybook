import React from 'react';
import IconButton from '@mui/material/IconButton';
import PreviewIcon from '@mui/icons-material/Preview';

function ButtonView({ handleOpen }) {
  return (
    <IconButton onClick={handleOpen} color="primary" aria-label="add to shopping cart">
      <PreviewIcon fontSize={'small'} />
    </IconButton>
  );
}

export default ButtonView;
