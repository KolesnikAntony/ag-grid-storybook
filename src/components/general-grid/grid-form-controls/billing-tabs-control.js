import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTabsView } from '../../../hooks/grid/useTabsView';

const BillingTabsControl = () => {
  const [tabs, handleShowTabs] = useTabsView();

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content-1" id="panel1a-header-1">
        <Typography>Tabs</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {tabs.map((value, index) => {
          return (
            <FormControlLabel
              key={value.title + index}
              control={<Checkbox checked={value.view} onChange={(e) => handleShowTabs(e, value.title)} />}
              label={value.title}
              labelPlacement="start"
            />
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default BillingTabsControl;
