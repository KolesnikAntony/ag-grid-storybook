import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import TextField from '@mui/material/TextField';

const Header = ({handleExport, handleShowColumnMenu, searchValue, searchChangeHandler }) => {
  return (
    <Box sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant={'h4'}>Factures</Typography>
      <Box columnGap={2} sx={{ display: 'flex' }}>
        <Button onClick={handleExport} variant={'outlined'} startIcon={<SummarizeIcon />}>
          Exporter
        </Button>
        <Button onClick={handleShowColumnMenu} variant={'outlined'} startIcon={<ViewWeekIcon />}>
          Columns
        </Button>
        <TextField
          id="outlined-basic"
          placeholder="Search"
          value={searchValue}
          onChange={searchChangeHandler}
          variant="outlined"
        />
      </Box>
    </Box>
  );
};

export default Header;
