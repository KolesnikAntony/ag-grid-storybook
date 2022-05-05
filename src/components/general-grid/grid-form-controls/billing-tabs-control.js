import React, { useCallback } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, IconButton, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTabsView } from '../../../hooks/grid/useTabsView';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from '../../../store/store';
import { filterTabAC } from '../../../features/new-tab-feature/action-creators/filter-tab-action-creaters';
import Box from '@mui/material/Box';

const BillingTabsControl = () => {
  const [tabs, handleShowTabs] = useTabsView();
  // console.log(tabs);
  const def = [1, 2, 3, 4];
  const defaultTabs = tabs.filter((el) => def.includes(el.id));
  const customTabs = tabs.filter((el) => !def.includes(el.id));
  const dispatch = useDispatch();

  const handleRemove = useCallback(
    (id) => {
      dispatch(filterTabAC.removeTab(id));
    },
    [dispatch]
  );

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content-1" id="panel1a-header-1">
        <Typography>Tabs</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack>
          {defaultTabs.map((value, index) => {
            return (
              <FormControlLabel
                key={value.title + index}
                control={<Checkbox checked={value.view} onChange={(e) => handleShowTabs(e, value.title)} />}
                label={value.title}
                labelPlacement="end"
              />
            );
          })}
          {customTabs.map((value, index) => {
            return (
              <Box>
                <FormControlLabel
                  key={value.title + index}
                  control={<Checkbox checked={value.view} onChange={(e) => handleShowTabs(e, value.title)} />}
                  label={value.title}
                  labelPlacement="end"
                />
                <IconButton onClick={() => handleRemove(value.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            );
          })}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default BillingTabsControl;
