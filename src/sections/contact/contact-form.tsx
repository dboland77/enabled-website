import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack, {StackProps} from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { varFade, MotionViewport } from 'src/components/animate';
import { ContactFormSchema } from './contactFormSchema';

import { FormEvent } from 'react';
import FormProvider, { RHFTextField } from 'src/components/hook-form';

export const defaultValues = {
  email: '',
  fullName: '',
  message: ''
};

export default function ContactForm() {

  const methods = useForm({
    resolver: yupResolver(ContactFormSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch('/api/send', {
            method: 'POST',
            headers:{
              'Accept':'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
    <Box
      gap={5}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
      }}
    >
      <Stack spacing={2}>
          <RHFTextField name="fullName" label="Name" />

          <RHFTextField name="email" label="Email address" />

          <RHFTextField name="message" label="Message"/>
        </Stack>
        </Box>

        <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
            >
              Send Message
            </LoadingButton>
</FormProvider>
  );
}