const defaultState = () => {
  let arr = [];
  for (let i = 1; i < 205; i++) {
    arr.push({
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

export let billingState = (() => {
  let billingDataArray = [];

  for (let i = 0; i < 10; i++) {
    billingDataArray.push(
      {
        uid: 617,
        number: '1438',
        client: {
          name: 'Max',
          attachment: 1,
        },
        guarantor: {
          name: "Office de l'assurance...",
          type: 'TP', // TG
        },
        provider: 'Dr. Tardieu',
        total: 29.4,
        open: 29.4,
        creation: '29.11.2021',
        due: '29.11.2021',
        expiration: 2,
        status: {
          name: 'paid', // unpaid, cancelled
          date: '13.04.22',
        },
        dispatch: 'sent', // not-sent, error
        copy: {
          name: 'sent', // not-sent, error
          date: '13.04.22',
        },
      },
      {
        uid: 618,
        number: '1439',
        client: {
          name: 'Max',
          attachment: 0,
        },
        guarantor: {
          name: "Office de l'assurance...",
          type: 'TG',
        },
        provider: 'Dr. Tardieu',
        total: 29.4,
        open: 29.4,
        creation: '29.11.2021',
        due: '29.11.2021',
        expiration: 0,
        status: {
          name: 'unpaid',
          date: '13.04.22',
        },
        dispatch: 'not-sent',
        copy: {
          name: 'not-sent',
          date: '',
        },
      },
      {
        uid: 619,
        number: '1440',
        client: {
          name: 'Max',
          attachment: 3,
        },
        guarantor: {
          name: "Office de l'assurance...",
          type: 'TG',
        },
        provider: 'Dr. Tardieu',
        total: 129.4,
        open: 129.4,
        creation: '29.11.2021',
        due: '29.11.2021',
        expiration: 3,
        status: {
          name: 'cancelled',
          date: '13.04.22',
        },
        dispatch: 'error',
        copy: {
          name: 'error',
          date: '',
        },
      },
      {
        uid: 620,
        number: '1438',
        client: {
          name: 'Max',
          attachment: 1,
        },
        guarantor: {
          name: "Office de l'assurance...",
          type: 'TP', // TG
        },
        provider: 'Dr. Tardieu',
        total: 29.4,
        open: 29.4,
        creation: '29.11.2021',
        due: '29.11.2021',
        expiration: 0,
        status: {
          name: 'paid', // unpaid, cancelled
          date: null,
        },
        dispatch: 'sent', // not-sent, error
        copy: {
          name: 'sent',
          date: '14.04.20222',
        },
      }
    );
  }

  return billingDataArray;
})();

// console.log(billingState);

export const billingTest = [
  {
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
    dispatch: 'not-sent',
  },
  {
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
    dispatch: 'not-sent',
  },
  {
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
    dispatch: 'not-sent',
  },
  {
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
    dispatch: 'not-sent',
  },
  {
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
    dispatch: 'not-sent',
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
