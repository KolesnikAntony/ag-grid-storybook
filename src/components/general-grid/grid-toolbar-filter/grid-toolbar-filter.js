import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { GRID_TYPES } from '../../../constants/grid-types';
import BillingTabsControl from '../grid-form-controls/billing-tabs-control';
import { GridContext } from '../../../context/GridApiContext';

const GridToolbarFilter = () => {
  const { type } = useContext(GridContext);

  return (
    <Box>
      <If condition={type === GRID_TYPES.billing}>
        <BillingTabsControl />
      </If>
      {/*<ColumnControls columnApi={columnApi} />*/}
    </Box>
  );
};

export default GridToolbarFilter;
