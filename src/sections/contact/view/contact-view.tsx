'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import MainLayout from 'src/layouts/main';
import ContactForm from '../contact-form';

export default function ContactView() {
  return (
    <MainLayout>
      <Container
        sx={{
          py: { xs: 10, md: 5 },
        }}
      >
        <Container id="contact">
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
      </Container>
    </MainLayout>
  );
}
