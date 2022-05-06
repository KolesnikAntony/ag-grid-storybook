import React from 'react';
import Box from '@mui/material/Box';

export default (props) => {
  console.log(props.value);

  return <div>{props.value}</div>;
};
