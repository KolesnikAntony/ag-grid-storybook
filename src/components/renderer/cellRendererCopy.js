import React, { Fragment } from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

export default (props) => {
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)
  const paid = value.name + (value.date ? ` on ${value.date}` : '');

  return (
    <Fragment>
      <Choose>
        <When condition={value.name === 'sent'}>
          <Chip icon={<CheckIcon />} label={`${paid}`} />
        </When>
        <When condition={value.name === 'not-sent'}>
          <Chip icon={<CircleOutlinedIcon />} label={value.name} />
        </When>
        <When condition={value.name === 'error'}>
          <Chip icon={<DeleteIcon />} label={value.name} />
        </When>
      </Choose>
    </Fragment>
  );
};
