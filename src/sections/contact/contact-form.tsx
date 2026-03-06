'use client';

import Stack from '@mui/material/Stack';
import { alpha, useTheme } from '@mui/material/styles';

import { LoadingButton } from '@mui/lab';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { ContactFormSchema } from './contactFormSchema';

export const defaultValues = {
  email: '',
  fullName: '',
  message: '',
};

export default function ContactForm() {
  const theme = useTheme();

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
      <Stack spacing={3}>
        <RHFTextField
          name="fullName"
          label="Your Name"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />

        <RHFTextField
          name="email"
          label="Email Address"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />

        <RHFTextField
          name="message"
          label="Your Message"
          multiline
          rows={4}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
              '&:hover fieldset': {
                borderColor: 'primary.main',
              },
            },
          }}
        />

        <LoadingButton
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          endIcon={<Iconify icon="solar:arrow-right-linear" />}
          sx={{
            py: 1.5,
            fontWeight: 600,
            boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.24)}`,
            '&:hover': {
              boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.32)}`,
            },
          }}
        >
          Send Message
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
