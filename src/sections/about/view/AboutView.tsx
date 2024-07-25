'use client';

import Container from '@mui/material/Container';

import MainLayout from 'src/layouts/main';
import FAQ from '../FAQ';

export default function AboutView() {
  return (
    <MainLayout>
      <Container id="about">
        <FAQ />
      </Container>
    </MainLayout>
  );
}
