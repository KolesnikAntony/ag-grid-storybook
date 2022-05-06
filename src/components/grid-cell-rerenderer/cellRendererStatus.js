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
        {/* <When condition={value.name === 'paid'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#C9FF78' }} icon={<CheckIcon />} label={`${paid}`} />
        </When>
        <When condition={value.name === 'unpaid'}>
          <Chip
            sx={sx.chipStatus}
            style={{ backgroundColor: '#F5F5F7' }}
            icon={<CircleOutlinedIcon />}
            label={value.name}
          />
        </When>
        <When condition={value.name === 'partially-paid'}>
          <Chip
            sx={sx.chipStatus}
            style={{ backgroundColor: '#F5F5F7' }}
            icon={<CheckCircleOutlineIcon />}
            label={value.name}
          />
        </When> */}
        
        <When condition={value.name === 'cancelled'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#FEE3E1', color: '#8D130B' }} label={value.name} />
        </When>
        <When condition={value.name === 'draft'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#F2F5F7', color: '#2C2E32' }} label={value.name} />
        </When>
        {/* <When condition={value.name === 'normal-status'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#e9e9e9', color: 'rgba(141, 19, 11, 1)' }} label={value.name} />
        </When> */}
        <When condition={value.name === '1st-reminder'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#FFF0DE', color: '#603900' }} label={value.name} />
        </When>
        <When condition={value.name === '2nd-reminder'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#FFF0DE', color: '#603900' }} label={value.name} />
        </When>
        <When condition={value.name === '3rd-reminder'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#FFF0DE', color: '#603900' }} label={value.name} />
        </When>
        <When condition={value.name === 'formal-notice'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#F0DEF3', color: '#621870' }} label={value.name} />
        </When>
        <When condition={value.name === 'pursuit'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#FCDDE8', color: '#90123C' }} label={value.name} />
        </When>
        <When condition={value.name === 'paid'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#E4F3E5', color: '#1F4622' }} label={value.name} />
        </When>
        <When condition={value.name === 'error'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#FFFBD7', color: '#504800' }} label={value.name} />
        </When>
        <When condition={value.name === 'unpaid'}>
          <Chip sx={sx.chipStatus} style={{ backgroundColor: '#D9F2FE', color: '#043E59' }} label={value.name} />
        </When>
      </Choose>
    </Fragment>
  );
};
