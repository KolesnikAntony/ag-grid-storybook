import React, { useCallback, useContext } from 'react';
import { GridContext } from '../../../context/GridApiContext';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Button } from '@mui/material';

const ExportBtn = () => {
  const { gridApi } = useContext(GridContext);
  const handleExport = useCallback(() => {
    gridApi.exportDataAsExcel();
  }, [gridApi]);

  return (
    <Button onClick={handleExport} variant={'contained'} startIcon={<SummarizeIcon />}>
      Exporter
    </Button>
  );
};

export default ExportBtn;
