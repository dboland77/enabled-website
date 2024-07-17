import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

import { varFade, MotionViewport } from 'src/components/animate';
import { FormSchema } from './schema';

import { FormEvent } from 'react';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
export default function ContactForm() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const response = await fetch('/api/send', {
      method: 'POST',
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    console.log(data);
  }
  return (
    <FormControl>
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        <Button type="submit">Submit</Button>
      </form>
    </FormControl>
  );
}
