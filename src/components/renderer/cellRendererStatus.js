import React, { Fragment } from 'react';
import useStyle from './cellRendererStyle';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';

export default (props) => {
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)
  const paid = value.name + (value.date ? ` on ${value.date}` : '');

  return (
    <Fragment>
      <Choose>
        <When condition={value.name === 'paid'}>
          <Chip icon={<CheckIcon />} label={`${paid}`} />
        </When>
        <When condition={value.name === 'unpaid'}>
          <Chip icon={<CircleOutlinedIcon />} label={value.name} />
        </When>
        <When condition={value.name === 'partially-paid'}>
          <Chip icon={<CheckCircleOutlineIcon />} label={value.name} />
        </When>
        <When condition={value.name === 'cancelled'}>
          <Chip icon={<DeleteIcon />} label={value.name} />
        </When>
        <When condition={value.name === 'draft'}>
          <Chip icon={<SaveIcon />} label={value.name} />
        </When>
        {/*  */}
        <When condition={value.name === 'normal-status'}>
          <Chip sx={{ backgroundColor: '#e9e9e9' }} label={value.name} />
        </When>
        <When condition={value.name === '1st-reminder'}>
          <Chip sx={{ backgroundColor: '#fff263' }} label={value.name} />
        </When>
        <When condition={value.name === '2nd-reminder'}>
          <Chip sx={{ backgroundColor: '#fdd835' }} label={value.name} />
        </When>
        <When condition={value.name === '3rd-reminder'}>
          <Chip sx={{ backgroundColor: '#fbc02d' }} label={value.name} />
        </When>
        <When condition={value.name === 'formal-notice'}>
          <Chip sx={{ backgroundColor: '#f57f17' }} label={value.name} />
        </When>
        <When condition={value.name === 'pursuit'}>
          <Chip sx={{ backgroundColor: '#ff5722' }} label={value.name} />
        </When>
      </Choose>
    </Fragment>
  );
};
