const defaultState = () => {
  let arr = [];
  for (let i = 0; i < 12; i++) {
    arr.push({
      id: i,
      make: 'Toyota',
      model: 'Celica',
      price: 35000,
      isDeleted: false,
      isDisabled: false,
      isUpdated: false,
      isError: false,
      errorText: '',
    });
  }
  return arr;
};

const transformState = (type) => {
  return defaultState().map((el, index) => {
    if ([1, 2, 3, 5].includes(index)) {
      if (type === 'isError') {
        if (index === 2) {
          el.errorText = 'Error from error text';
        }
        if (el.errorText) {
          return { ...el, [type]: true, make: el.errorText, model: '', price: null };
        }
        return { ...el, [type]: true, make: 'Some error', model: '', price: null };
      }
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
  error: transformState('isError'),
};
