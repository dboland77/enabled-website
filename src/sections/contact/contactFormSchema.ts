import * as Yup from 'yup';


export const ContactFormSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  message:Yup.string().required('Please Enter a message')
});
