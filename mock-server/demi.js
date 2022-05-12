export let billingDemi = () => {
  let billingDataArray = [];

  for (let i = 0; i < 10; i++) {
    billingDataArray.push(
      {
        uid: {
          value: 618,
          type: 'number',
        },
        number: {
          value: 56164,
          type: 'number',
        },
        creation: {
          value: '28.11.2021',
          type: 'date',
        },
        customer: {
          value: 'Max',
          type: 'text',
        },
        debtor: {
          value: "Office de l'assurance",
          type: 'text',
        },
        refund: {
          value: 'TP',
          type: 'chip',
          variation: ['tp', 'tg'],
        },
        provider: {
          value: 'Dr. Tardieu',
          type: 'text',
        },
        total: {
          value: 30,
          type: 'number',
        },
        paid: {
          value: 30,
          type: 'number',
        },
        open: {
          value: 30,
          type: 'number',
        },
        status: {
          value: 'paid',
          type: 'chip',
          variation: [
            'paid',
            'unpaid',
            ' partially-paid',
            'cancelled',
            'draft',
            'normal',
            '1st-reminder',
            '2nd-reminder',
            '3rd-reminder',
            'formal-notice',
            'pursuit',
          ],
        },
        due: {
          value: '28.11.2021',
          type: 'date',
        },
        sent: {
          value: 'not-sent',
          type: 'icon',
          variation: ['not-sent', 'sent'],
        }, // sent, not-sent, error, flagged, not-flagged
        sendDate: {
          value: '28.11.2021',
          type: 'date',
        },
        boss: {
          value: 'Stas',
          type: 'chip',
          variation: ['Stas', 'Anton'],
        },
      },
      {
        uid: {
          value: 619,
          type: 'number',
        },
        number: {
          value: 31411,
          type: 'number',
        },
        creation: {
          value: '29.11.2021',
          type: 'date',
        },
        customer: {
          value: 'Stas',
          type: 'text',
        },
        debtor: {
          value: 'Office de Alooo',
          type: 'text',
        },
        refund: {
          value: 'TG',
          type: 'chip',
          variation: ['tp', 'tg'],
        },
        provider: {
          value: 'Dr. Valentin',
          type: 'text',
        },
        total: {
          value: 134,
          type: 'number',
        },
        paid: {
          value: 31,
          type: 'number',
        },
        open: {
          value: 13,
          type: 'number',
        },
        status: {
          value: 'draft',
          type: 'chip',
          variation: [
            'paid',
            'unpaid',
            ' partially-paid',
            'cancelled',
            'draft',
            'normal',
            '1st-reminder',
            '2nd-reminder',
            '3rd-reminder',
            'formal-notice',
            'pursuit',
          ],
        },
        due: {
          value: '18.11.2021',
          type: 'date',
        },
        sent: {
          value: 'sent',
          type: 'icon',
          variation: ['not-sent', 'sent'],
        }, // sent, not-sent, error, flagged, not-flagged
        sendDate: {
          value: '30.11.2021',
          type: 'date',
        },
      },
      {
        uid: {
          value: 785,
          type: 'number',
        },
        number: {
          value: 31431,
          type: 'number',
        },
        creation: {
          value: '27.11.2021',
          type: 'date',
        },
        customer: {
          value: 'Kos',
          type: 'text',
        },
        debtor: {
          value: 'Office de ne office',
          type: 'text',
        },
        refund: {
          value: 'TP',
          type: 'chip',
          variation: ['tp', 'tg'],
        },
        provider: {
          value: 'Dr. Vova',
          type: 'text',
        },
        total: {
          value: 313,
          type: 'number',
        },
        paid: {
          value: 133,
          type: 'number',
        },
        open: {
          value: 313,
          type: 'number',
        },
        status: {
          value: 'normal',
          type: 'chip',
          variation: [
            'paid',
            'unpaid',
            ' partially-paid',
            'cancelled',
            'draft',
            'normal',
            '1st-reminder',
            '2nd-reminder',
            '3rd-reminder',
            'formal-notice',
            'pursuit',
          ],
        },
        due: {
          value: '10.11.2021',
          type: 'date',
        },
        sent: {
          value: 'not-sent',
          type: 'icon',
          variation: ['not-sent', 'sent'],
        }, // sent, not-sent, error, flagged, not-flagged
        sendDate: {
          value: '28.11.2021',
          type: 'date',
        },
      }
    );
  }
  return billingDataArray;
};

export const getCases = () => [
  {
    uid: {
      value: 618,
      type: 'number',
    },
    number: {
      value: 56164,
      type: 'number',
    },
    creation: {
      value: '28.11.2021',
      type: 'date',
    },
  },
];
