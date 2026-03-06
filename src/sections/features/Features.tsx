'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { m } from 'framer-motion';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

const FEATURES = [
  {
    icon: 'solar:user-hand-up-bold-duotone',
    title: 'Customised Adjustments',
    description:
      'We understand that each disability is unique. Our platform allows for the creation of customised adjustment plans for each employee, ensuring that they get the support they need.',
  },
  {
    icon: 'solar:chat-round-dots-bold-duotone',
    title: 'Easy Communication',
    description:
      'Communication is key when it comes to disability adjustments. enableD allows employees and employers to communicate seamlessly, ensuring that everyone is on the same page.',
  },
  {
    icon: 'solar:shield-check-bold-duotone',
    title: 'Compliance Tracking',
    description:
      'enableD helps employers comply with disability laws by providing easy-to-use tools for tracking adjustments, ensuring they stay on top of their legal obligations.',
  },
  {
    icon: 'solar:chart-2-bold-duotone',
    title: 'Data Analytics',
    description:
      'enableD allows employers to track and analyse adjustment requests, providing valuable insights into employee needs and preferences.',
  },
  {
    icon: 'solar:card-2-bold-duotone',
    title: 'Adjustments Passport',
    description:
      'enableD lets employees create a profile of adjustments tailored to their unique needs. This profile can be exported and used beyond the workplace.',
  },
];

export default function Features() {
  const theme = useTheme();

  return (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={3} textAlign="center" sx={{ mb: { xs: 6, md: 10 } }}>
        <m.div variants={varFade().inUp}>
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
            Features
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography variant="h2">
            Everything you need for
            <br />
            workplace accessibility
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}
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
                <Iconify
                  icon={feature.icon}
                  width={32}
                  sx={{ color: 'primary.main' }}
                />
              </Box>

              <Typography variant="h6" sx={{ mb: 1.5 }}>
                {feature.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', lineHeight: 1.7 }}
              >
                {feature.description}
              </Typography>
            </Box>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
