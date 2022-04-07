const defaultState = () => {
  let arr = [];
  for (let i = 0; i < 205; i++) {
    arr.push({ make: 'Toyota', model: 'Celica', price: 35000, isDeleted: false, isDisabled: false });
  }
  return arr;
};

const transformState = (type) => {
  return defaultState().map((el, index) => {
    if ([1, 2, 5, 7].includes(index)) {
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
};
