'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import MainLayout from 'src/layouts/main';
import FAQ from '../FAQ';

export default function FAQView() {
  return (
    <MainLayout>
      <Container id="faq">
        <FAQ />
      </Container>
    </MainLayout>
  );
}
