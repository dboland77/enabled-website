'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

const FEATURES = [
  {
    icon: 'solar:user-hand-up-bold-duotone',
    title: 'Customised Adjustments',
    description:
      'We understand that each disability is unique. Our platform allows for the creation of customised adjustment plans for each employee.',
  },
  {
    icon: 'solar:chat-round-dots-bold-duotone',
    title: 'Easy Communication',
    description:
      'Communication is key when it comes to disability adjustments. enableD allows employees and employers to communicate seamlessly.',
  },
  {
    icon: 'solar:shield-check-bold-duotone',
    title: 'Compliance Tracking',
    description:
      'enableD helps employers comply with disability laws by providing easy-to-use tools for tracking adjustments.',
  },
  {
    icon: 'solar:chart-2-bold-duotone',
    title: 'Data Analytics',
    description:
      'Track and analyse adjustment requests, providing valuable insights into employee needs and preferences.',
  },
  {
    icon: 'solar:card-2-bold-duotone',
    title: 'Adjustments Passport',
    description:
      'Create a profile of adjustments tailored to unique needs. This profile can be exported and used beyond the workplace.',
  },
  {
    icon: 'solar:lock-keyhole-bold-duotone',
    title: 'Secure & Private',
    description:
      'All data is encrypted and stored securely. We take privacy seriously and comply with all data protection regulations.',
  },
];

export default function Features() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 15 },
      }}
    >
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
            mb: { xs: 8, md: 12 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: 2,
                display: 'block',
              }}
            >
              Features
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
              Everything You Need for
              <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                Workplace Accessibility
              </Box>
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
              Our comprehensive platform streamlines the entire reasonable adjustments process, from
              request to implementation.
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={4}
          display="grid"
          gridTemplateColumns={{
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {FEATURES.map((feature) => (
            <m.div key={feature.title} variants={varFade().inUp}>
              <Box
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  border: `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    mb: 3,
                  }}
                >
                  <Iconify icon={feature.icon} width={28} sx={{ color: 'primary.main' }} />
                </Box>

                <Typography variant="h6" sx={{ mb: 1.5 }}>
                  {feature.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {feature.description}
                </Typography>
              </Box>
            </m.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
