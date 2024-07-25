'use client';

import Container from '@mui/material/Container';

import MainLayout from 'src/layouts/main';
import About from '../About';

export default function AboutView() {
  return (
    <MainLayout>
      <Container id="about">
        <About />
      </Container>
    </MainLayout>
  );
}
