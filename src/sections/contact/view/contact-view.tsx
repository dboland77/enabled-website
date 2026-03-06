'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import MainLayout from 'src/layouts/main';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';
import ContactForm from '../contact-form';

export default function ContactView() {
  const theme = useTheme();

  return (
    <MainLayout>
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
          <Box
            gap={{ xs: 5, md: 8 }}
            display="grid"
            gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
            alignItems="center"
          >
            {/* Left side - Text content */}
            <Stack spacing={4}>
              <m.div variants={varFade().inLeft}>
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 700,
                    letterSpacing: 2,
                    display: 'block',
                  }}
                >
                  Contact Us
                </Typography>
              </m.div>

              <m.div variants={varFade().inLeft}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: 'text.primary',
                  }}
                >
                  Let&apos;s Start a
                  <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                    Conversation
                  </Box>
                </Typography>
              </m.div>

              <m.div variants={varFade().inLeft}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 400,
                    lineHeight: 1.7,
                  }}
                >
                  Have questions about enableD? Want to learn how we can help make your workplace
                  more inclusive? We would love to hear from you.
                </Typography>
              </m.div>

              <m.div variants={varFade().inLeft}>
                <Stack spacing={3} sx={{ mt: 2 }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                      }}
                    >
                      <Iconify
                        icon="solar:letter-bold-duotone"
                        width={24}
                        sx={{ color: 'primary.main' }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Email us at
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        hello@enabled.app
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 2,
                        bgcolor: alpha(theme.palette.primary.main, 0.08),
                      }}
                    >
                      <Iconify
                        icon="solar:clock-circle-bold-duotone"
                        width={24}
                        sx={{ color: 'primary.main' }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Response time
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Within 24 hours
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </m.div>
            </Stack>

            {/* Right side - Form */}
            <m.div variants={varFade().inRight}>
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
                  boxShadow: `0 24px 48px ${alpha(theme.palette.grey[500], 0.12)}`,
                }}
              >
                <Typography variant="h5" sx={{ mb: 3 }}>
                  Send us a message
                </Typography>
                <ContactForm />
              </Box>
            </m.div>
          </Box>
        </Container>
      </Box>
    </MainLayout>
  );
}
