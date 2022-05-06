import React, { useContext } from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { GridContext } from '../../../context/GridApiContext';
import Button from '@mui/material/Button';

const GridSelectedControls = ({ rowCount }) => {
  const { gridApi } = useContext(GridContext);

  const handleCancel = () => {
    gridApi.deselectAll();
  };

  const handlePlomb = () => {
    alert("Hello, I'm KATARINA");
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Stack direction="row" alignItems="center">
        <IconButton onClick={handleCancel}>
          <CloseIcon />
        </IconButton>
        <Typography>{rowCount} result selected</Typography>
      </Stack>
      <Button onClick={handlePlomb}>Send</Button>
      <Button onClick={handlePlomb}>Print</Button>
      <Button onClick={handlePlomb}>Escalate</Button>
      <Button onClick={handlePlomb}>Send Reminder</Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </Stack>
  );
};

export default GridSelectedControls;
