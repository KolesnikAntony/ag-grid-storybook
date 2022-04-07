const defaultState = () => {
  let arr = [];
  for (let i = 0; i < 12; i++) {
    arr.push({ make: 'Toyota', model: 'Celica', price: 35000, isDeleted: false, isDisabled: false, isUpdated: false });
  }
  return arr;
};

const transformState = (type) => {
  return defaultState().map((el, index) => {
    if ([1, 2, 3, 5].includes(index)) {
      return { ...el, [type]: true };
    } else {
      return el;
    }
  });
};

export const STATES = {
  empty: [],
  default: defaultState(),
  deleted: transformState('isDeleted'),
  disabled: transformState('isDisabled'),
  updated: transformState('isUpdated'),
};
