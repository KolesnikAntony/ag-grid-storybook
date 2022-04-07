import React, { useEffect, useState } from 'react';
import { defaultState } from '../../api';
import Grid from '../../components/grid/grid';

const GridStory = (args) => {
  const [state, setState] = useState([]);
  const { isDisabled, isDeleted, isEmpty } = args;

  const transformState = (type) => {
    return state.map((el, index) => {
      if (index === 1) {
        return { ...el, [type]: true };
      } else {
        return el;
      }
    });
  };

  const deletedState = transformState('isDeleted');
  const disabledState = transformState('isDisabled');

  useEffect(() => {
    if (isDeleted) {
      setState(deletedState);
    }
    if (isDisabled) {
      setState(disabledState);
    }
    if (!isEmpty && !isDeleted && !isDisabled) {
      setState(defaultState);
    }
  }, [isDisabled, isDeleted, setState, deletedState, disabledState, isEmpty]);

  return <Grid {...args} state={state} />;
};

export default GridStory;
