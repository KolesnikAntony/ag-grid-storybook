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
        number: 1438,
        client: {
          name: 'Max',
          attachment: 1,
        },
        guarantor: {
          name: "Office de l'assurance...",
          type: 'TP', // TP, TG
        },
        provider: 'Dr. Tardieu',
        total: 30,
        open: 30,
        creation: '28.11.2021',
        due: '28.11.2021',
        expiration: 2,
        status: {
          name: 'paid', // paid, unpaid, partially-paid, cancelled, draft; normal status, 1st-reminder, 2nd-reminder, 3rd-reminder, formal-notice, pursuit
          date: '13.04.22',
        },
        dispatch: 'not-sent', // sent, not-sent, error, flagged, not-flagged
        copy: {
          name: 'sent', // sent, not-sent
          date: '13.04.22',
        },
      },
      {
        uid: 618,
        number: 1439,
        client: {
          name: 'Mix',
          attachment: 0,
        },
        guarantor: {
          name: 'Office de Katarina...',
          type: 'TG',
        },
        provider: 'Dr. Tardieu',
        total: 29.4,
        open: 29.4,
        creation: '30.11.2021',
        due: '30.11.2021',
        expiration: 0,
        status: {
          name: 'unpaid',
          date: '13.04.22',
        },
        dispatch: 'sent',
        copy: {
          name: 'not-sent',
          date: '',
        },
      },
      {
        uid: 619,
        number: 1440,
        client: {
          name: 'Tax',
          attachment: 3,
        },
        guarantor: {
          name: 'Office de population...',
          type: 'TG',
        },
        provider: 'Dr. Tardieu',
        total: 129.4,
        open: 129.4,
        creation: '29.11.2021',
        due: '29.11.2021',
        expiration: 3,
        status: {
          name: 'partially-paid',
          date: '13.04.22',
        },
        dispatch: 'error',
        copy: {
          name: 'sent',
          date: '',
        },
      },
      {
        uid: 620,
        number: 1438,
        client: {
          name: 'Poc',
          attachment: 1,
        },
        guarantor: {
          name: 'Office de Anton...',
          type: 'TP',
        },
        provider: 'Dr. Tardieu',
        total: 29.4,
        open: 29.4,
        creation: '12.11.2021',
        due: '25.11.2021',
        expiration: 0,
        status: {
          name: 'cancelled',
          date: null,
        },
        dispatch: 'flagged',
        copy: {
          name: 'sent',
          date: '14.04.20222',
        },
      },
      {
        uid: 617,
        number: 1438,
        client: {
          name: 'Max',
          attachment: 1,
        },
        guarantor: {
          name: "Office de l'assurance...",
          type: 'TP', // TP, TG
        },
        provider: 'Dr. Tardieu',
        total: 30,
        open: 30,
        creation: '28.11.2021',
        due: '28.11.2021',
        expiration: 2,
        status: {
          name: 'draft', // paid, unpaid, partially-paid, cancelled, draft; normal status, 1st-reminder, 2nd-reminder, 3rd-reminder, formal-notice, pursuit
          date: '13.04.22',
        },
        dispatch: 'sent', // sent, not-sent, error, flagged, not-flagged
        copy: {
          name: 'sent', // sent, not-sent
          date: '13.04.22',
        },
      },
      {
        uid: 618,
        number: 1439,
        client: {
          name: 'Mix',
          attachment: 0,
        },
        guarantor: {
          name: 'Office de Katarina...',
          type: 'TG',
        },
        provider: 'Dr. Tardieu',
        total: 29.4,
        open: 29.4,
        creation: '30.11.2021',
        due: '30.11.2021',
        expiration: 0,
        status: {
          name: 'normal-status',
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
        number: 1440,
        client: {
          name: 'Tax',
          attachment: 3,
        },
        guarantor: {
          name: 'Office de population...',
          type: 'TG',
        },
        provider: 'Dr. Tardieu',
        total: 129.4,
        open: 129.4,
        creation: '29.11.2021',
        due: '29.11.2021',
        expiration: 3,
        status: {
          name: '1st-reminder',
          date: '13.04.22',
        },
        dispatch: 'error',
        copy: {
          name: 'sent',
          date: '',
        },
      },
      {
        uid: 620,
        number: 1438,
        client: {
          name: 'Poc',
          attachment: 1,
        },
        guarantor: {
          name: 'Office de Anton...',
          type: 'TP',
        },
        provider: 'Dr. Tardieu',
        total: 29.4,
        open: 29.4,
        creation: '12.11.2021',
        due: '25.11.2021',
        expiration: 0,
        status: {
          name: '2nd-reminder',
          date: null,
        },
        dispatch: 'sent',
        copy: {
          name: 'sent',
          date: '14.04.20222',
        },
      },
      {
        uid: 617,
        number: 1438,
        client: {
          name: 'Max',
          attachment: 1,
        },
        guarantor: {
          name: "Office de l'assurance...",
          type: 'TP', // TP, TG
        },
        provider: 'Dr. Tardieu',
        total: 30,
        open: 30,
        creation: '28.11.2021',
        due: '28.11.2021',
        expiration: 2,
        status: {
          name: '3rd-reminder', // paid, unpaid, partially-paid, cancelled, draft; normal status, 1st-reminder, 2nd-reminder, 3rd-reminder, formal-notice, pursuit
          date: '13.04.22',
        },
        dispatch: 'sent', // sent, not-sent, error, flagged, not-flagged
        copy: {
          name: 'sent', // sent, not-sent
          date: '13.04.22',
        },
      },
      {
        uid: 618,
        number: 1439,
        client: {
          name: 'Mix',
          attachment: 0,
        },
        guarantor: {
          name: 'Office de Katarina...',
          type: 'TG',
        },
        provider: 'Dr. Tardieu',
        total: 29.4,
        open: 29.4,
        creation: '30.11.2021',
        due: '30.11.2021',
        expiration: 0,
        status: {
          name: 'formal-notice',
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
        number: 1440,
        client: {
          name: 'Tax',
          attachment: 3,
        },
        guarantor: {
          name: 'Office de population...',
          type: 'TG',
        },
        provider: 'Dr. Tardieu',
        total: 129.4,
        open: 129.4,
        creation: '29.11.2021',
        due: '29.11.2021',
        expiration: 3,
        status: {
          name: 'pursuit',
          date: '13.04.22',
        },
        dispatch: 'error',
        copy: {
          name: 'sent',
          date: '',
        },
      },
      {
        uid: 620,
        number: 1438,
        client: {
          name: 'Poc',
          attachment: 1,
        },
        guarantor: {
          name: 'Office de Anton...',
          type: 'TP',
        },
        provider: 'Dr. Tardieu',
        total: 29.4,
        open: 29.4,
        creation: '12.11.2021',
        due: '25.11.2021',
        expiration: 0,
        status: {
          name: '2nd-reminder',
          date: null,
        },
        dispatch: 'sent',
        copy: {
          name: 'sent',
          date: '14.04.20222',
        },
      }
    );
  }

  return billingDataArray;
})();

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

export const createInvoiceState = [
  {
    tariff_type: '001',
    code: '00.0010',
    ref_code: null,
    name: 'Consultation, première période de 5 min (consultation de base)',
    quantity: '1',
    session: '1',
    date_begin: null,
    date_end: null,
    provider_id: null,
    responsible_id: null,
    billing_role: 'both',
    medical_role: 'self_employed',
    body_location: 'none',
    treatment: 'ambulatory',
    unit_mt: '9.57',
    unit_factor_mt: '0.89',
    scale_factor_mt: '1',
    external_factor_mt: '1',
    amount_mt: null,
    unit_tt: '8.19',
    unit_factor_tt: '0.89',
    scale_factor_tt: '1',
    external_factor_tt: '1',
    amount_tt: null,
    amount: null,
    vat_rate: '0',
    obligation: '1',
    section_code: null,
    remark: null,
    service_attributes: null,
    performance_type: 'H',
    age_from: null,
    age_to: null,
    non_cumulable_with: [
      '00.0060-L',
      '00.01.02-K',
      '00.0110-L',
      '00.1325-L',
      '02.0010-L',
      '02.0020-L',
      '02.0030-L',
      '02.0040-L',
      '02.0050-L',
      '08.0500-L',
      '12-G',
    ],
    sex: null,
    group: ['18', '58'],
    block: null,
    quantity_restrictions: 'L-<:-1-1-P-07',
    authorization: '9999',
    version: '01.08.00_BR_UVG',
    id: '41r13e1',
  },
  {
    tariff_type: '001',
    code: '00.0015',
    name: 'Consultation, première période de 5 min (consultation de base)',
    quantity: '2',
    session: '1',
    date_begin: '2022-06-20',
    billing_role: 'both',
    medical_role: 'self_employed',
    body_location: 'none',
    treatment: 'ambulatory',
    unit_mt: '9.57',
    unit_factor_mt: '0.89',
    scale_factor_mt: '1',
    external_factor_mt: '1',
    unit_tt: '8.19',
    unit_factor_tt: '0.89',
    scale_factor_tt: '1',
    external_factor_tt: '1',
    vat_rate: '0',
    obligation: '1',
    performance_type: 'H',
    non_cumulable_with: [
      '00.0060-L',
      '00.01.02-K',
      '00.0110-L',
      '00.1325-L',
      '02.0010-L',
      '02.0020-L',
      '02.0030-L',
      '02.0040-L',
      '02.0050-L',
      '08.0500-L',
      '12-G',
    ],
    group: ['18', '58'],
    quantity_restrictions: 'L-<:-1-1-P-07',
    authorization: '9999',
    version: '01.08.00_BR_UVG',
    id: '41r11e1',
  },
  {
    tariff_type: '402',
    code: '7680316440115',
    name: 'FERRO-GRADUMET cpr dépôt 30 pce',
    quantity: '1',
    session: '1',
    unit: '10.9',
    unit_factor: '1',
    scale_factor: '1',
    external_factor: '1',
    vat_rate: '2.5',
    obligation: '1',
    id: '413553e1',
  },
  {
    tariff_type: '999',
    code: '1',
    name: 'My Custom Postion',
    quantity: '1',
    session: '1',
    unit: '2.074',
    unit_factor: '1',
    scale_factor: '1',
    external_factor: '1',
    vat_rate: '3.7',
    obligation: '1',
    id: '41r1341311e1',
  },
];

export let casesToInvoiceState = (() => {
  let casesToInvoiceDataArray = [];

  for (let i = 0; i < 10; i++) {
    casesToInvoiceDataArray.push(
      {
        uid: 231,
        number: 489348039480283082098390803,
        title: 'Max',
        last_service_date: '21.04.2022',
        patient: 'Mary',
        guarantor: {
          name: 'Agrisano Krankenkasse',
          type: 'TP', // TP, TG
        },
        provider: 'Dr. Tardieu',
        services_to_invoice: {
          name: 'medical', // non_medical, external, non_external, absence
          counter: 6,
        },
        amount: 30,
      },
    );
  }

  return casesToInvoiceDataArray;
})();

export const STATES = {
  empty: [],
  default: defaultState(),
  deleted: transformState('isDeleted'),
  disabled: transformState('isDisabled'),
  updated: transformState('isUpdated'),
  error: transformState('isError'),
  billingState,
  createInvoiceState,
  casesToInvoiceState,
};
