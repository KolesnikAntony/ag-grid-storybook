import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { GRID_TYPES } from '../../../constants/grid-types';
import BillingTabsControls from './toolbar-controls/billing-tabs-controls';
import ColumnControls from './toolbar-controls/column-controls';
import { GridContext } from '../../../context/GridApiContext';

const GridToolbarFilter = ({ columnApi, gridApi }) => {
  const { type } = useContext(GridContext);

  return (
    <Box>
      <If condition={type === GRID_TYPES.billing}>
        <BillingTabsControls />
      </If>
      <ColumnControls columnApi={columnApi} />
    </Box>
  );
};

export default GridToolbarFilter;
