import React, { useMemo } from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import SendIcon from '@mui/icons-material/Send';

export default ({ value: vv, valueFormatted }) => {
  const sx = useStyle();
  const cell = useMemo(() => valueFormatted || vv || { value: '', type: undefined }, [valueFormatted, vv]);
  const { value, type } = cell;

  // let cellSx;
  // if (col === 'number') {
  //   cellSx = {
  //     fontWeight: 600,
  //     color: '#2399f1',
  //   };
  // } else if (col === 'total' || col === 'open') {
  //   cellSx = {
  //     fontWeight: 600,
  //     color: '#000',
  //   };
  // } else {
  //   cellSx = {};
  // }

  const chipColor = '#2399f1';

  return (
    <>
      <Choose>
        <When condition={type === 'chip'}>
          <Chip sx={sx.chipGuarantor} style={{ backgroundColor: chipColor }} label={value} />
        </When>
        <When condition={type === 'icon'}>
          <SendIcon sx={{ color: '#DEE5ED' }} />
        </When>
        <Otherwise>
          <Box component="span" sx={{ ...sx.cell }}>
            {value}
          </Box>
        </Otherwise>
      </Choose>
    </>
  );
};
