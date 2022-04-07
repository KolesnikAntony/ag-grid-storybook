import React, { useEffect, useState } from 'react';
import { defaultState } from '../../api';
import Grid from '../../components/grid/grid';

const GridStory = (args) => {
  console.log(args)
  const [state, setState] = useState(defaultState);
  const { isDisabled, isDeleted } = args;

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
  }, [isDisabled, isDeleted, setState, deletedState, disabledState]);

  return <Grid {...args} state={state} />;
};

export default GridStory;
