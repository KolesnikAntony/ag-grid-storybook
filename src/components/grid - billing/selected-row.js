import React, { useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SelectedRow = ({ selectedRow, gridApi }) => {
  const handleSelected = useCallback(() => {
    const selectedRow = gridApi.getSelectedRows();

    if (selectedRow.length) {
      const totalArray = selectedRow.map((el) => el.total);
      const sum = totalArray.reduce((a, b) => a + b);
      alert(sum.toFixed(1));
    } else {
      alert('Please, select row');
    }
  }, [gridApi]);

  return (
    <Box p={2}>
      <Typography>Selected: </Typography>
      <Typography>{selectedRow}</Typography>
      <Button onClick={handleSelected} fullWidth={true}>
        Sum
      </Button>
    </Box>
  );
};

export default SelectedRow;
