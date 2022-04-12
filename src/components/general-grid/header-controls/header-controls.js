import React, { useCallback } from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useHeaderTitle } from '../../../hooks/useHeaderTitle';
import logo from '../../../assets/images/title-logo.svg?url';
import HeaderControlsBilling from './header-controls-billing';
import { GRID_TYPES } from '../../../constants/grid-types';
import AddButton from '../buttons-grid-control/add-button';
import HeaderControlsTrans from './header-controls-trans';

const useStyle = () => {
  return {
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '12px 24px',
      borderTopRightRadius: '1.6rem',
      borderTopLeftRadius: '1.6rem',
      backgroundColor: 'white',
    },
    titleBox: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      fontSize: '1.8rem',
      ml: 1,
    },
  };
};

const HeaderControls = ({ type }) => {
  const title = useHeaderTitle(type);
  const sx = useStyle();
  const handleNewInvoice = useCallback(() => {
    alert('Create new Invoice');
  }, []);

  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.titleBox}>
        <Box component="img" src={logo} alt={'logo'} />
        <Typography component="h1" sx={sx.title}>
          {title}
        </Typography>
      </Box>
      <Choose>
        <When condition={type === GRID_TYPES.billing}>
          <HeaderControlsBilling />
        </When>
        <When condition={type === GRID_TYPES.transactions}>
          <HeaderControlsTrans />
        </When>
        <When condition={type === GRID_TYPES.casesToInvoice}>
          <AddButton onClick={handleNewInvoice}>Create a free invoice</AddButton>
        </When>
      </Choose>
    </Box>
  );
};

HeaderControls.propTypes = {
  type: PropTypes.string.isRequired,
  gridApi: PropTypes.object,
};

export default HeaderControls;
