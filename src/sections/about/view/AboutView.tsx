'use client';

import Container from '@mui/material/Container';

import MainLayout from 'src/layouts/main';
import AboutFounder from '../AboutFounder';

export default function AboutView() {
  return (
    <MainLayout>
      <Container id="about">
        <AboutFounder />
      </Container>
    </MainLayout>
  );
}
