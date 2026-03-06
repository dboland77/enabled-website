'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { varFade, MotionViewport } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';

export default function HomeEnabled() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.grey[100], 0.5)} 100%)`,
          zIndex: 0,
        }}
      />

      <Container component={MotionViewport} sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          spacing={4}
          alignItems="center"
          sx={{
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: 2,
                mb: 2,
                display: 'block',
              }}
            >
              Workplace Accessibility Made Simple
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                color: 'text.primary',
              }}
            >
              Your Journey to a
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                  display: 'block',
                }}
              >
                Fairer Workplace
              </Box>
              Starts Here
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                maxWidth: 600,
                lineHeight: 1.7,
              }}
            >
              Streamline reasonable adjustments for your organisation. EnableD makes disability
              accommodations simple, compliant, and effective.
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
              <Button
                component={RouterLink}
                href={paths.contact}
                size="large"
                variant="contained"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.24)}`,
                  '&:hover': {
                    boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.32)}`,
                  },
                }}
                endIcon={<Iconify icon="solar:arrow-right-linear" />}
              >
                Get Started
              </Button>

              <Button
                component={RouterLink}
                href={paths.features}
                size="large"
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}
