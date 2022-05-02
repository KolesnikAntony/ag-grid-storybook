import * as Yup from 'yup';

export const customTabSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  'uid.count': Yup.string()
    .matches(/^[0-9]+$/gi, 'Must be a Number')
    .transform((_, val) => (val ? val : null))
    .nullable(),
  'uid.type': Yup.string(),
  'number.count': Yup.string()
    .matches(/^[0-9]+$/gi, 'Must be a Number')
    .transform((_, val) => (val ? val : null))
    .nullable(),
  'number.type': Yup.string(),
  'created.date': Yup.string().nullable(),
  'created.type': Yup.string(),
  'due.date': Yup.string().nullable(),
  'due.type': Yup.string(),
  'sent.date': Yup.string().nullable(),
  'sent.type': Yup.string(),
  // sentControl: Yup.boolean(),
  // client: Yup.string(),
  // guarantor: Yup.string(),
  // tg: Yup.boolean(),
  // tp: Yup.boolean(),
  // case: Yup.string(),
  // provider: Yup.string(),
  // status: Yup.string(),
  'total.select': Yup.string(),
  'total.count': Yup.string()
    .matches(/^[0-9]+$/gi, 'Must be a Number')
    .transform((_, val) => (val ? val : null))
    .nullable(),
});
