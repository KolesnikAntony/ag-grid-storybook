import React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const useStyle = (error) => {
  // const theme = useTheme();

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
      color: error ? 'red' : 'unset',
    },
  };
};

const GridEmpty = ({ error }) => {
  const sx = useStyle(!!error);

  return (
    <Box sx={sx.emptyBox}>
      <Typography>{error || "I'm empty ! :("}</Typography>
    </Box>
  );
};

export default GridEmpty;
