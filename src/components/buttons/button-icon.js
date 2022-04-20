import React from 'react';
import IconButton from '@mui/material/IconButton';
import useStyle from '../renderer/cellRendererStyle';

const ButtonPrint = ({ children, ariaLabel = '' }) => {
  const sx = useStyle();

  const btnClickedHandler = (e) => {
    e.stopPropagation();
    console.log(props.data);
  };

  return (
    <IconButton sx={sx.cellIconButton} onClick={btnClickedHandler} aria-label={ariaLabel}>
      {children}
    </IconButton>
  );
};

export default ButtonPrint;
