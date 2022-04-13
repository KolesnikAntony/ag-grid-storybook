import React from 'react';
import { Stack } from '@mui/material';
import NavigationButton from '../buttons-grid-control/navigation-button';
import { NavLink } from 'react-router-dom';
import ExportBtn from '../buttons-grid-control/export-btn';

const links = [
  { name: 'View all', to: '' },
  { name: 'Invoices to send', to: 'send' },
  { name: 'Invoices sent', to: 'sent' },
  { name: 'Invoices with remainders', to: 'remainders' },
  { name: 'Invoices with errors', to: 'errors' },
];
const HeaderControlsBilling = () => {
  return (
    <Stack direction="row">
      <For each="link" of={links}>
        <NavigationButton key={link.to} component={NavLink} to={link.to}>
          {link.name}
        </NavigationButton>
      </For>
      <ExportBtn />
    </Stack>
  );
};

export default HeaderControlsBilling;
