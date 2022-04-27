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
      padding: '1.5rem 3rem',
    },
    titleBox: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      width: '2.7rem',
      height: '2.7rem',
      '&:not(:last-child)': {
        marginRight: '1.2rem',
      },
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 600,
      color: '#424242',
    },
  };
};

const HeaderControls = ({ tabs, type }) => {
  const sx = useStyle();
  const title = useHeaderTitle(type);
  const handleNewInvoice = useCallback(() => {
    alert('Create new Invoice');
  }, []);

  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.titleBox}>
        <Box component="img" sx={sx.icon} src={logo} alt={'logo'} />
        <Typography component="h1" sx={sx.title}>
          {title}
        </Typography>
      </Box>
      <Choose>
        <When condition={type === GRID_TYPES.billing}>
          <HeaderControlsBilling tabs={tabs} />
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
