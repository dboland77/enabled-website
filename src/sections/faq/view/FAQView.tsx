'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import FAQ from '../FAQ';

export default function FAQView() {
  return (
    <>
      <Container sx={{ py: 10 }} id="contact">
        <Typography variant="h3" sx={{ mt: 8, mb: 2 }}>
          Frequently Asked Questions
        </Typography>
        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <FAQ />
        </Box>
      </Container>
    </>
  );
}
