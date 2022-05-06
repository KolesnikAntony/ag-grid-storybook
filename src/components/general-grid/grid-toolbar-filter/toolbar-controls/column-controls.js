import React, { useContext, useMemo } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useColumnView } from '../../../../hooks/grid/useColumnView';
import PropTypes from 'prop-types';
import { GRID_TYPES } from '../../../../constants/grid-types';
import { GridContext } from '../../../../context/GridApiContext';

const ColumnControls = ({ columnApi }) => {
  const [column, handleShowColumn] = useColumnView(columnApi);
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content-2" id="panel1a-header-2">
        <Typography>Columns</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {Object.keys(column).map((key, index) => (
          <FormControlLabel
            key={key + index}
            value={key}
            control={<Checkbox checked={column[key]} onChange={(e) => handleShowColumn(e, key)} />}
            label={key.toUpperCase()}
            labelPlacement="start"
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

ColumnControls.propTypes = {
  columnApi: PropTypes.object.isRequired,
};

export default ColumnControls;
