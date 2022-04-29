import React, { useCallback, useContext, useState } from 'react';
import { Stack, Tab, Tabs } from '@mui/material';
import ExportBtn from '../grid-control-btns/export-btn';
import { GridContext } from '../../../context/GridApiContext';
import { useSelector } from '../../../hooks/common/useSelector';

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

const HeaderControlsBilling = () => {
  const sx = useStyles();
  const [value, setValue] = useState('View all');
  const { gridApi } = useContext(GridContext);

  const { tabs, tabsModel } = useSelector();

  const handleChange = (_, newValue) => {
    setValue(newValue);
    handleSendFilter(newValue);
  };

  const handleSendFilter = useCallback(
    (tab) => {
      const model = tabsModel[tab];
      if (gridApi) {
        gridApi.setFilterModel(model);
      }
    },
    [gridApi, tabsModel]
  );

  const tabList = Object.entries(tabs)
    .map(([key, value]) => value && key)
    .filter((el) => el);

  return (
    <Stack direction="row">
      <Tabs value={value} onChange={handleChange} centered sx={sx.tabsRoot}>
        <Tab label={'View all'} value={'View all'} sx={sx.tabRoot} />
        <For each="link" of={tabList}>
          <Tab key={link} value={link} label={link} sx={sx.tabRoot} />
        </For>
      </Tabs>
      <ExportBtn />
    </Stack>
  );
};

export default HeaderControlsBilling;
