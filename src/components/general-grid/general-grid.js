import React from 'react';
import PropTypes from 'prop-types';
import { GRID_TYPES } from '../../constants/grid-types';
import Box from '@mui/material/Box';

const GeneralGrid = ({ type }) => {
  return (
    <>
      <Choose>
        <When condition={type === GRID_TYPES.billing}>
          <Box>Billing</Box>
        </When>
        <When condition={type === GRID_TYPES.agenda}>
          <Box>Agenda</Box>
        </When>
        <When condition={type === GRID_TYPES.def}>
          <Box>Default</Box>
        </When>
      </Choose>
    </>
  );
};

GeneralGrid.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object).isRequired,
  pagination: PropTypes.bool,
  rowCount: PropTypes.number,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  isSortable: PropTypes.bool,
  isResizable: PropTypes.bool,
  isFilterMenu: PropTypes.bool,
  rowSelection: PropTypes.string,
  type: PropTypes.oneOf([GRID_TYPES.billing, GRID_TYPES.agenda, GRID_TYPES.def]).isRequired,
};
GeneralGrid.defaultProps = {
  state: [],
  rowCount: 10,
  rowSelection: 'multiply',
  isFilterMenu: true,
};

export default GeneralGrid;
