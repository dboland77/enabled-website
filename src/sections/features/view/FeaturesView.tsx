'use client';

import Container from '@mui/material/Container';

import MainLayout from 'src/layouts/main';
import Features from '../Features';

export default function FeaturesView() {
  return (
    <MainLayout>
      <Container id="features">
        <Features />
      </Container>
    </MainLayout>
  );
}
