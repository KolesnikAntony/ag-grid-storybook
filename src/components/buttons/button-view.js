import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import useStyle from '../grid-cell-rerenderer/cellRendererStyle';

const ButtonView = ({ handleOpen }) => {
  const sx = useStyle();

  return (
    <Tooltip title="View invoice" placement="top" sx={{ marginBottom: '1rem' }}>
      <Button variant="contained" sx={sx.cellButton} onClick={handleOpen} aria-label="View invoice">
        <VisibilityIcon sx={sx.cellButtonIcon} />
      </Button>
    </Tooltip>
  );
};

export default ButtonView;
