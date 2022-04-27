import React, { useCallback, useContext, useState } from 'react';
import { Stack, Tab, Tabs } from '@mui/material';
// import NavigationButton from '../buttons-grid-control/navigation-button';
// import { NavLink } from 'react-router-dom';
import ExportBtn from '../buttons-grid-control/export-btn';
import { GridContext } from '../../../context/GridApiContext';
import { HELPERS } from '../../../helpers/helpers';
// import {TabContext} from '../../../context/GridTabsContext';

const useStyles = () => ({
  tabsRoot: {
    minHeight: 'auto',
    height: '3.2rem',
  },
  tabRoot: {
    minHeight: 'auto',
    height: '3.2rem',
  },
});

const HeaderControlsBilling = ({tabs}) => {
  const sx = useStyles();
  const [value, setValue] = useState(0);
  const gridApi = useContext(GridContext);
  // const tabs = useContext(TabContext);

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

  const tabList = Object.entries(tabs).map(([key, value]) => value && key).filter((el) => el);

  return (
    <Stack direction="row">
      <Tabs value={value} onChange={handleChange} centered sx={sx.tabsRoot}>
        <Tab label={'View all'} sx={sx.tabRoot} />
        <For each="link" of={tabList}>
          <Tab key={link} label={link} sx={sx.tabRoot} />
        </For>
      </Tabs>
      <ExportBtn />
    </Stack>
  );
};

export default HeaderControlsBilling;
