import React, { useCallback, useContext } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';
import useStyle from '../renderer/cellRendererStyle';
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
    <Button variant="contained" sx={sx.cellButton} onClick={btnClickedHandler} aria-label="Print invoice">
      <DeleteOutlineIcon sx={sx.cellButtonIcon} />
    </Button>
  );
};

export default ButtonRemove;
