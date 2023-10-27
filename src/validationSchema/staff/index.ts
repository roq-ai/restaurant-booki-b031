import * as yup from 'yup';

export const staffValidationSchema = yup.object().shape({
  name: yup.string().required(),
  position: yup.string().required(),
  working_hours: yup.string().required(),
  restaurant_id: yup.string().nullable().required(),
});
