'use client';

import Container from '@mui/material/Container';

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
