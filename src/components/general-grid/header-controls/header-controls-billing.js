import React, { useCallback, useContext, useState } from 'react';
import { Stack, Tab, Tabs } from '@mui/material';
import NavigationButton from '../buttons-grid-control/navigation-button';
import { NavLink } from 'react-router-dom';
import ExportBtn from '../buttons-grid-control/export-btn';
import { GridContext } from '../../../context/GridApiContext';
import { HELPERS } from '../../../helpers/helpers';

const links = [
  { name: 'View all', to: '' },
  { name: 'Invoices to send', to: 'send' },
  { name: 'Invoices sent', to: 'sent' },
  { name: 'Invoices with reminders', to: 'reminders' },
  { name: 'Invoices with errors', to: 'errors' },
];
const HeaderControlsBilling = () => {
  const [value, setValue] = useState(0);
  const gridApi = useContext(GridContext);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    handleSendFilter(newValue);
  };

  const handleSendFilter = useCallback(
    (tab) => {
      const model = HELPERS.getFilterModel(tab);
      if (gridApi) {
        gridApi.setFilterModel(model);
      }
    },
    [gridApi]
  );
  return (
    <Stack direction="row">
      <Tabs value={value} onChange={handleChange} centered>
        <For each="link" of={links}>
          <Tab key={link.to} label={link.name} />
        </For>
      </Tabs>
      <ExportBtn />
    </Stack>
  );
};

export default HeaderControlsBilling;
