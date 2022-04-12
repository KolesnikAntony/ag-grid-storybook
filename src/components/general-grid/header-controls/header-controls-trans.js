import React from 'react';
import Stack from '@mui/material/Stack';
import ExportBtn from '../buttons-grid-control/export-btn';
import ImportBtn from '../buttons-grid-control/import-btn';
import Button from '@mui/material/Button';
import { Popover, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

const useStyle = () => {
  return {
    popper: {
      display: 'flex',
      alignItems: 'center',
      padding: 1,
    },
  };
};

const HeaderControlsTrans = () => {
  const sx = useStyle();
  //POPOVER SHOW
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //FILTER STATE
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Stack direction="row" spacing={2}>
      <ImportBtn />
      <ExportBtn />
      <Button startIcon={<CompareArrowsIcon />} aria-describedby={id} onClick={handleClick}>
        Search disable
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <Box sx={sx.popper}>
          <CompareArrowsIcon />
          <Typography sx={{ p: 2 }}>Dr. Gilles Tardieu</Typography>
          <Switch size="small" checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
        </Box>
      </Popover>
    </Stack>
  );
};

export default HeaderControlsTrans;
