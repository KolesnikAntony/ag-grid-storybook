import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { GridContext } from '../../context/GridApiContext';
import { useColumnView } from '../../hooks/useColumnView';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const GridToolbarFilter = ({ tabs, handleShowTabs, columnApi }) => {
  const gridApi = useContext(GridContext);
  const [column, handleShowColumn] = useColumnView(columnApi, ['btn-view', 'btn-send', 'btn-print', 'checkbox']);

  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content-1" id="panel1a-header-1">
          <Typography>Tabs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {Object.keys(tabs).map((key, index) => (
            <FormControlLabel
              key={key + index}
              value={key}
              control={<Checkbox checked={tabs[key]} onChange={(e) => handleShowTabs(e, key)} />}
              label={key.toUpperCase()}
              labelPlacement="start"
            />
          ))}
        </AccordionDetails>
      </Accordion>
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
    </Box>
  );
};

export default GridToolbarFilter;
