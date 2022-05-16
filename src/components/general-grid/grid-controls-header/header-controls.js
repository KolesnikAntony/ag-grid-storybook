import React, { useCallback, useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { useHeaderTitle } from '../../../hooks/grid/useHeaderTitle';
import logo from '../../../assets/images/title-logo.svg?url';
import HeaderControlsBilling from './header-controls-billing';
import { GRID_TYPES } from '../../../constants/grid-types';
import AddButton from '../grid-control-btns/add-button';
import HeaderControlsTrans from './header-controls-trans';
import { GridContext } from '../../../context/GridApiContext';
import Button from '@mui/material/Button';
import { useCallToolPanel } from '../../../hooks/grid/useCallToolPanel';

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

const HeaderControls = () => {
  const sx = useStyle();
  const { type } = useContext(GridContext);
  const title = useHeaderTitle();
  const handleNewInvoice = useCallback(() => {
    alert('Create new Invoice');
  }, []);

  //SIDEBAR TOOLS HANDLER
  const openFilterHandler = useCallToolPanel('custom-tab');

  return (
    <Box sx={sx.wrapper}>
      <Box sx={sx.titleBox}>
        <Box component="img" sx={sx.icon} src={logo} alt={'logo'} />
        <Typography component="h1" sx={sx.title}>
          {title}
        </Typography>
      </Box>
      <Button onClick={openFilterHandler}>Filter</Button>
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

export default HeaderControls;
