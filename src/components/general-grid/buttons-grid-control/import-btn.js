import React, { useCallback } from 'react';
import { Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ImportBtn = () => {
  const handleImport = useCallback(() => {
    alert('Import popup');
  }, []);

  return (
    <Button onClick={handleImport} variant={'contained'} startIcon={<ArrowDownwardIcon />}>
      Import
    </Button>
  );
};

export default ImportBtn;
