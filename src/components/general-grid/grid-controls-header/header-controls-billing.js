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

  const { tabs } = useSelector();

  const handleChange = (_, newValue) => {
    setValue(newValue);
    handleSendFilter(newValue);
  };

  const handleSendFilter = useCallback(
    (tab) => {
      console.log(tab, '---log tab');
      const model = tabs.find((el) => el.title === tab)?.model;
      console.log(tabs, '---tabs');
      console.log(model, '---model');
      if (gridApi) {
        gridApi.setFilterModel(model);
        gridApi.onFilterChanged();
      }
    },
    [gridApi, tabs]
  );

  const currentTabs = tabs.filter((el) => el.view);

  return (
    <Stack direction="row">
      <Tabs value={value} onChange={handleChange} centered sx={sx.tabsRoot}>
        <Tab label={'View all'} value={'View all'} sx={sx.tabRoot} />
        <For each="tab" of={currentTabs}>
          <Tab key={tab.title} value={tab.title} label={tab.title} sx={sx.tabRoot} />
        </For>
      </Tabs>
      <ExportBtn />
    </Stack>
  );
};

export default HeaderControlsBilling;
