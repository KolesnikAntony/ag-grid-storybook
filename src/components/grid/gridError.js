import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyle = () => {
  const theme = useTheme();

  return {
    errorBox: {
      position: 'absolute',
      top: '4.8rem',
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
};

const GridError = () => {
  const sx = useStyle();

  return <Box sx={sx.errorBox}><Typography children="I have an error ! :(" /></Box>;
};

export default GridError;
