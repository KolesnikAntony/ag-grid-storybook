import React from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

export default (props) => {
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)

  return (
    <Box component="div" sx={sx.cell}>
      <Choose>
        <When condition={value === 'credit'}>
          <Chip sx={sx.chipGuarantor} style={{ backgroundColor: 'rgba(80,152,68,.15)', color: '#509844' }} label={value} />
        </When>
      </Choose>
    </Box>
  );
};
