'use client';

import Container from '@mui/material/Container';

import MainLayout from 'src/layouts/main';
import Glossary from '../Glossary';

export default function FeaturesView() {
  return (
    <MainLayout>
      <Container id="glossary">
        <Glossary />
      </Container>
    </MainLayout>
  );
}
