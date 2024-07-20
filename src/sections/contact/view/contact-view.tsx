'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import ContactForm from '../contact-form';
import { Typography } from '@mui/material';

export default function ContactView() {
  return (
    <>
      <Container sx={{ py: 10 }}>
        <Typography variant="h3" sx={{ mt: 8, mb: 2 }}>
          Get in touch
        </Typography>
        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <ContactForm />
        </Box>
      </Container>
    </>
  );
}
