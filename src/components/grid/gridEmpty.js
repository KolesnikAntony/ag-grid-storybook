import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyle = () => {
  const theme = useTheme();

  return {
    emptyBox: {
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

const GridEmpty = () => {
  const sx = useStyle();

  return <Box sx={sx.emptyBox}><Typography children="I'm empty ! :(" /></Box>;
};

export default GridEmpty;
