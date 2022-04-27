import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { GridContext } from '../../context/GridApiContext';
import { useColumnView } from '../../hooks/useColumnView';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const GridToolbarFilter = ({ columnApi }) => {
  const gridApi = useContext(GridContext);
  const [column, handleShowColumn] = useColumnView(columnApi);
  console.log();

  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
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
    </Box>
  );
};

export default GridToolbarFilter;
