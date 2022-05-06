import React, { useCallback, useContext } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import IconButton from '@mui/material/IconButton';
import useStyle from '../grid-cell-rerenderer/cellRendererStyle';
import { GridContext } from '../../context/GridApiContext';

const ButtonRemove = ({ data }) => {
  const sx = useStyle();
  const { setRowData } = useContext(GridContext);

  const btnClickedHandler = useCallback(
    (e) => {
      e.stopPropagation();
      setRowData((prev) => {
        return prev.filter((el) => el.id !== data.id);
      });
    },
    [data, setRowData]
  );

  return (
    <IconButton sx={sx.cellIconButton} onClick={btnClickedHandler} aria-label="Print invoice">
      <DeleteOutlineIcon sx={sx.cellButtonIcon} />
    </IconButton>
  );
};

export default ButtonRemove;
