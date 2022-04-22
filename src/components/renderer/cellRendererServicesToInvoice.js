import React, { Fragment } from 'react';
import useStyle from './cellRendererStyle';
import Chip from '@mui/material/Chip';
import CircleIcon from '@mui/icons-material/Circle';

export default (props) => {
  const sx = useStyle();
  // const col = props.column.colId;
  const value = props?.valueFormatted || props.value;
  // console.log('col', col)
  const label = `${value.name} (${value.counter})`;

  return (
    <Fragment>
      <Choose>
        <When condition={value.name === 'medical'}>
          <Chip
            variant="outlined"
            sx={sx.chipStatus}
            icon={<CircleIcon style={{ color: '#4A90E2' }} />}
            label={`Medical consultation (${value.quantity})`}
          />
        </When>
        <When condition={value.name === 'non_medical'}>
          <Chip
            variant="outlined"
            sx={sx.chipStatus}
            icon={<CircleIcon style={{ color: '#e91e63' }} />}
            label={`Non-medical consultation (${value.quantity})`}
          />
        </When>
        <When condition={value.name === 'external'}>
          <Chip
            variant="outlined"
            sx={sx.chipStatus}
            icon={<CircleIcon style={{ color: '#1EB609' }} />}
            label={`Medical external visit (${value.quantity})`}
          />
        </When>
        <When condition={value.name === 'non_external'}>
          <Chip
            variant="outlined"
            sx={sx.chipStatus}
            icon={<CircleIcon style={{ color: '#1EB609' }} />}
            label={`Non-medical external visit (${value.quantity})`}
          />
        </When>
        <When condition={value.name === 'absence'}>
          <Chip
            variant="outlined"
            sx={sx.chipStatus}
            icon={<CircleIcon style={{ color: '#6ec6ff' }} />}
            label={`Consultation in the absence of the patient (${value.quantity})`}
          />
        </When>
      </Choose>
    </Fragment>
  );
};
