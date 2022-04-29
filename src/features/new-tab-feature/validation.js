import * as Yup from 'yup';

export const customTabSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  uidCount: Yup.number()
    .transform((_, val) => (val ? val : null))
    .nullable(true)
    .typeError('Must be number'),
  uidType: Yup.string(),
  numberCount: Yup.number()
    .transform((_, val) => (val ? val : null))
    .nullable(true)
    .typeError('Must be number'),
  numberType: Yup.string(),
  createdDate: Yup.string().nullable(),
  createdType: Yup.string(),
  dueDate: Yup.string().nullable(),
  dueType: Yup.string(),
  sentDate: Yup.string().nullable(),
  sentType: Yup.string(),
  sentControl: Yup.boolean(),
  client: Yup.string(),
  guarantor: Yup.string(),
  tg: Yup.boolean(),
  tp: Yup.boolean(),
  case: Yup.string(),
  provider: Yup.string(),
  status: Yup.string(),
  totalSelect: Yup.string(),
  total: Yup.number()
    .transform((_, val) => (val ? val : null))
    .nullable(true)
    .typeError('Must be number'),
});
