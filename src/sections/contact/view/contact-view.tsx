'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import MainLayout from 'src/layouts/main';
import ContactForm from '../contact-form';

export default function ContactView() {
  return (
    <MainLayout>
      <Container id="contact" maxWidth="md">
        <Typography variant="h3" sx={{ mt: 5, mb: 2 }}>
          Get in touch
        </Typography>
        <ContactForm />
      </Container>
    </MainLayout>
  );
}
