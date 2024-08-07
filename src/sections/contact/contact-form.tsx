import Stack from '@mui/material/Stack';

import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { ContactFormSchema } from './contactFormSchema';

export const defaultValues = {
  email: '',
  fullName: '',
  message: '',
};

export default function ContactForm() {
  const methods = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      reset();
      return response;
    } catch (error) {
      return error;
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2}>
        <RHFTextField name="fullName" label="Name" />

        <RHFTextField name="email" label="Email address" />

        <RHFTextField name="message" label="Message" multiline rows={4} />
        <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
          Send Message
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
