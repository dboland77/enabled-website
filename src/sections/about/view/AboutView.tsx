'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { m } from 'framer-motion';

import MainLayout from 'src/layouts/main';
import { varFade, MotionViewport } from 'src/components/animate';
import AboutFounder from '../AboutFounder';
import AboutEnabled from '../AboutEnabled';

export default function AboutView() {
  return (
    <MainLayout>
      <Box
        id="about"
        sx={{
          overflow: 'hidden',
          bgcolor: 'background.default',
        }}
      >
        {/* Hero Section */}
        <Container component={MotionViewport} sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 5, md: 8 } }}>
          <Stack spacing={3} alignItems="center" textAlign="center">
            <m.div variants={varFade().inUp}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
                Our Story
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography variant="h2" sx={{ maxWidth: 600 }}>
                Building a More Inclusive Future
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', maxWidth: 600, lineHeight: 1.8 }}
              >
                EnableD was born from a personal mission to transform how workplaces support
                employees with disabilities.
              </Typography>
            </m.div>
          </Stack>
        </Container>

        <AboutFounder />
        <AboutEnabled />
      </Box>
    </MainLayout>
  );
}
