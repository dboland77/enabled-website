import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack, {StackProps} from '@mui/material/Stack';
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



  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch('/api/send', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
   return data
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit}>
    <Box
      gap={5}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
      }}
    >
      <Stack spacing={2}>
        <Block>
          <RHFTextField name="fullName" label="Full Name" />
        </Block>

        <Block>
          <RHFTextField name="email" label="Email address" />
        </Block>

        <Block>
          <RHFTextField name="age" label="Age" type="number" />
        </Block>
        </Stack>
        </Box>
</FormProvider>
  );
}


// ----------------------------------------------------------------------

interface BlockProps extends StackProps {
  label?: string;
  children: React.ReactNode;
}

function Block({ label = 'RHFTextField', sx, children }: BlockProps) {
  return (
    <Stack spacing={1} sx={{ width: 1, ...sx }}>
      <Typography
        variant="caption"
        sx={{
          textAlign: 'right',
          fontStyle: 'italic',
          color: 'text.disabled',
        }}
      >
        {label}
      </Typography>
      {children}
    </Stack>
  );
}