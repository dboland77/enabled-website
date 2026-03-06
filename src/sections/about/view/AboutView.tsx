'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import MainLayout from 'src/layouts/main';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

const HIGHLIGHTS = [
  {
    icon: 'solar:users-group-rounded-bold-duotone',
    title: 'For Employees',
    description:
      'Request modifications seamlessly with a user-friendly interface. Your voice is heard and your needs are addressed promptly.',
  },
  {
    icon: 'solar:buildings-2-bold-duotone',
    title: 'For Employers',
    description:
      'Simplify tracking, managing, and reporting on reasonable adjustments while supporting legal compliance.',
  },
  {
    icon: 'solar:heart-bold-duotone',
    title: 'For Everyone',
    description:
      'Build workplaces where every individual can thrive, with diversity and inclusion at the core.',
  },
];

export default function AboutView() {
  const theme = useTheme();

  return (
    <MainLayout>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '60vh',
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
                Our Story
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
                Building a More
                <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                  Inclusive Future
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
                enableD was born from a personal mission to transform how workplaces support
                employees with disabilities.
              </Typography>
            </m.div>
          </Stack>
        </Container>
      </Box>

      {/* Founder Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container component={MotionViewport}>
          <Box
            gap={{ xs: 5, md: 8 }}
            display="grid"
            gridTemplateColumns={{ xs: '1fr', md: '1fr 2fr' }}
            alignItems="center"
          >
            <m.div variants={varFade().inLeft}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: `0 24px 48px ${alpha(theme.palette.grey[500], 0.16)}`,
                }}
              >
                <Image
                  src="/assets/about/Dave.png"
                  alt="Dave Boland Founder of enableD wearing a blue suit and white shirt"
                  sx={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </m.div>

            <Stack spacing={4}>
              <m.div variants={varFade().inRight}>
                <Typography
                  variant="overline"
                  sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 1.5 }}
                >
                  Meet the Founder
                </Typography>

                <Typography variant="h3" sx={{ mt: 1, mb: 3 }}>
                  Dave Boland
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  Dave Boland is a distinguished professional with a background in actuarial science
                  and insurance risk modelling. With 15 years of experience, Dave has driven
                  innovative risk assessment initiatives that enhance financial stability.
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  He graduated top of his class in Computer Science and Mathematics, earning an
                  award from the university President. Dave&apos;s academic credentials include
                  serving as a senior lecturer and programme director at Queen Mary University of
                  London.
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: 'text.primary', fontStyle: 'italic', lineHeight: 1.8 }}
                  >
                    As an autistic individual with sensory needs and communication differences, Dave
                    found traditional workplaces largely inaccessible - a challenge faced by 65% of
                    disabled individuals in the UK. He chose entrepreneurship to create solutions
                    that ensure future generations never encounter these barriers.
                  </Typography>
                </Box>
              </m.div>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* About enableD Section */}
      <Box
        sx={{
          py: { xs: 10, md: 15 },
          position: 'relative',
          overflow: 'hidden',
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
          <Stack spacing={4} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
            <m.div variants={varFade().inUp}>
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}
              >
                About enableD
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  fontWeight: 700,
                  maxWidth: 720,
                }}
              >
                Creating Inclusive Workplaces
              </Typography>
            </m.div>

            <m.div variants={varFade().inUp}>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', maxWidth: 800, lineHeight: 1.8 }}
              >
                enableD is at the forefront of creating a more inclusive and accessible workplace
                for employees with disabilities. Our mission is to simplify the process of
                requesting and managing reasonable adjustments, ensuring that both employees and
                employers can navigate this crucial aspect of workplace inclusivity with ease.
              </Typography>
            </m.div>
          </Stack>

          <Box gap={4} display="grid" gridTemplateColumns={{ xs: '1fr', md: 'repeat(3, 1fr)' }}>
            {HIGHLIGHTS.map((item) => (
              <m.div key={item.title} variants={varFade().inUp}>
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
                    <Iconify icon={item.icon} width={28} sx={{ color: 'primary.main' }} />
                  </Box>

                  <Typography variant="h6" sx={{ mb: 1.5 }}>
                    {item.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Box>
              </m.div>
            ))}
          </Box>
        </Container>
      </Box>
    </MainLayout>
  );
}
