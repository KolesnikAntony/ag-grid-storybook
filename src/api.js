const defaultState = () => {
  let arr = [];
  for (let i = 1; i < 205; i++) {
    arr.push({
      id: i,
      make: 'Toyota',
      model: 'Celica',
      price: 35000,
      date: `${i < 10 ? '0' + i : i}/08/1994`,
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

export const billingState = [
  {
    id: 1,
    uid: 617,
    number: '1437',
    client: 'Anthony ',
    guarantor: "Office de l'assurance...",
    provider: 'Dr. Tardieu',
    total: 29.4,
    open: 29.4,
    creation: '29.11.2021',
    due: '29.11.2021',
    status: 'paid',
    dispatch: 'not sent',
  },
  {
    id: 2,
    uid: 617,
    number: '1438',
    client: 'Max',
    guarantor: "Office de l'assurance...",
    provider: 'Dr. Tardieu',
    total: 29.4,
    open: 29.4,
    creation: '29.11.2021',
    due: '29.11.2021',
    status: 'unpaid',
    dispatch: 'not sent',
  },
  {
    id: 3,
    uid: 617,
    number: '1439',
    client: 'Petro',
    guarantor: "Office de l'assurance...",
    provider: 'Dr. Tardieu',
    total: 29.4,
    open: 29.4,
    creation: '29.11.2021',
    due: '29.11.2021',
    status: 'unpaid',
    dispatch: 'sent',
  },
  {
    id: 4,
    uid: 617,
    number: '1440',
    client: 'Vlad',
    guarantor: "Office de l'assurance...",
    provider: 'Dr. Tardieu',
    total: 29.4,
    open: 29.4,
    creation: '29.11.2021',
    due: '29.11.2021',
    status: 'canceled',
    dispatch: 'sent',
  },
  {
    id: 5,
    uid: 617,
    number: '1441',
    client: 'Misha',
    guarantor: "Office de l'assurance...",
    provider: 'Dr. Tardieu',
    total: 29.4,
    open: 29.4,
    creation: '29.11.2021',
    due: '29.11.2021',
    status: 'paid',
    dispatch: 'not sent',
  },
  {
    id: 6,
    uid: 617,
    number: '1442',
    client: 'Katya',
    guarantor: "Office de l'assurance...",
    provider: 'Dr. Tardieu',
    total: 29.4,
    open: 29.4,
    creation: '29.11.2021',
    due: '29.11.2021',
    status: 'paid',
    dispatch: 'not sent',
  },
  {
    id: 7,
    uid: 617,
    number: '1443',
    client: 'Olena',
    guarantor: "Office de l'assurance...",
    provider: 'Dr. Tardieu',
    total: 29.4,
    open: 29.4,
    creation: '29.11.2021',
    due: '29.11.2021',
    status: 'paid',
    dispatch: 'not sent',
  },
  {
    id: 8,
    uid: 617,
    number: '1444',
    client: 'Vasia',
    guarantor: "Office de l'assurance...",
    provider: 'Dr. Tardieu',
    total: 29.4,
    open: 29.4,
    creation: '29.11.2021',
    due: '29.11.2021',
    status: 'canceled',
    dispatch: 'sent',
  },
  {
    id: 9,
    uid: 617,
    number: '1445',
    client: 'Kiril',
    guarantor: "Office de l'assurance...",
    provider: 'Dr. Tardieu',
    total: 29.4,
    open: 29.4,
    creation: '29.11.2021',
    due: '29.11.2021',
    status: 'unpaid',
    dispatch: 'sent',
  },
  {
    id: 10,
    uid: 617,
    number: '1446',
    client: 'Anthony',
    guarantor: "Office de l'assurance...",
    provider: 'Dr. Tardieu',
    total: 29.4,
    open: 29.4,
    creation: '29.11.2021',
    due: '29.11.2021',
    status: 'unpaid',
    dispatch: 'sent',
  },
  {
    id: 11,
    uid: 617,
    number: '1447',
    client: 'Anthony Fasano',
    guarantor: "Office de l'assurance...",
    provider: 'Dr. Tardieu',
    total: 29.4,
    open: 29.4,
    creation: '29.11.2021',
    due: '29.11.2021',
    status: 'canceled',
    dispatch: 'not sent',
  },
];

export const STATES = {
  empty: [],
  default: defaultState(),
  deleted: transformState('isDeleted'),
  disabled: transformState('isDisabled'),
  updated: transformState('isUpdated'),
  error: transformState('isError'),
  billingState,
};
