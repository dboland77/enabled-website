'use client';

import Box from '@mui/material/Box';

import MainLayout from 'src/layouts/main';
import Features from '../Features';

export default function FeaturesView() {
  return (
    <MainLayout>
      <Box
        id="features"
        sx={{
          overflow: 'hidden',
          bgcolor: 'background.default',
          pt: { xs: 8, md: 10 },
        }}
      >
        <Features />
      </Box>
    </MainLayout>
  );
}
