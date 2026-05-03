'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import MainLayout from 'src/layouts/main';
import { HEADER } from 'src/layouts/config-layout';

const NAVY = '#1a2e3a';
const TEAL = '#2596be';
const TEAL_DARK = '#1a7fa8';
const TEAL_LIGHT = '#4fb3cc';

export default function AboutView() {
  return (
    <MainLayout>
      {/* Hero */}
      <Box
        sx={{
          bgcolor: NAVY,
          pt: { xs: `${HEADER.H_MOBILE + 48}px`, md: `${HEADER.H_DESKTOP + 80}px` },
          pb: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} sx={{ maxWidth: 740 }}>
            <Typography
              sx={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: TEAL_LIGHT,
              }}
            >
              About enableD
            </Typography>
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '1.875rem', sm: '2.25rem', md: '2.75rem' },
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                color: 'common.white',
              }}
            >
              I built this because the system failed me.{' '}
              <Box component="span" sx={{ color: TEAL_LIGHT }}>
                I don&apos;t want it to fail anyone else.
              </Box>
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Body */}
      <Box sx={{ bgcolor: 'background.default', py: { xs: 10, md: 14 } }}>
        <Container maxWidth="md">
          <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">

            {/* Photo — sits naturally alongside the opening paragraphs */}
            <Grid item xs={12} sm={4}>
              <Box
                component="img"
                src="/assets/about/DaveBoland.jpeg"
                alt="Dave Boland, Founder of enableD"
                sx={{
                  width: '100%',
                  maxWidth: { xs: 200, sm: '100%' },
                  height: 'auto',
                  borderRadius: 2,
                  display: 'block',
                  mx: { xs: 'auto', sm: 0 },
                  mt: { sm: 0.5 },
                }}
              />
            </Grid>

            {/* Opening paragraphs alongside photo */}
            <Grid item xs={12} sm={8}>
              <Stack spacing={3}>
                <Typography sx={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'text.primary' }}>
                  My name is Dave Boland. I&apos;m autistic, and a few years ago I applied for a job.
                  My reasonable adjustments weren&apos;t handled properly during the interview process.
                  What followed was two years of fighting through the legal system to get a fair outcome.
                </Typography>
                <Typography sx={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'text.primary' }}>
                  I know what that costs. Not just financially. The time, the stress, the energy spent
                  on something that should never have happened in the first place — energy that could
                  have gone into doing the actual job.
                </Typography>
              </Stack>
            </Grid>

            {/* Remaining paragraphs — full width */}
            <Grid item xs={12}>
              <Stack spacing={3}>
                <Typography sx={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'text.primary' }}>
                  What struck me throughout that process wasn&apos;t that the employer was malicious.
                  It was that they didn&apos;t have a proper system. Nobody had documented what was
                  agreed. The interviewers weren&apos;t briefed. When things went wrong there was
                  nothing to refer back to. The whole thing unravelled because of process failure,
                  not bad intentions.
                </Typography>

                <Typography
                  sx={{
                    fontSize: '1.125rem',
                    lineHeight: 1.85,
                    color: NAVY,
                    fontWeight: 700,
                  }}
                >
                  That&apos;s why I built enableD.
                </Typography>

                <Typography sx={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'text.primary' }}>
                  enableD is a reasonable adjustments platform that gives employees a clear way to
                  request what they need, and gives employers an auditable record of every step. It
                  exists so that disabled employees get the support they&apos;re entitled to, and
                  employers can evidence that they handled it properly.
                </Typography>

                <Typography sx={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'text.primary' }}>
                  I built it alone. I&apos;m still building it. And I built it as someone who has
                  been on the receiving end of what happens when this goes wrong.
                </Typography>

                <Typography sx={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'text.primary' }}>
                  If you want to talk about what it could do for your organisation, I&apos;m easy to
                  reach at{' '}
                  <Box
                    component="a"
                    href="mailto:hello@getenabled.co.uk"
                    sx={{
                      color: TEAL_DARK,
                      textDecoration: 'none',
                      fontWeight: 600,
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    hello@getenabled.co.uk
                  </Box>
                  .
                </Typography>

                {/* Signature */}
                <Box sx={{ pt: 2, display: 'inline-block', borderLeft: `3px solid ${TEAL}`, pl: 2.5 }}>
                  <Typography
                    sx={{
                      color: NAVY,
                      fontWeight: 700,
                      fontSize: '1rem',
                      letterSpacing: '0.01em',
                    }}
                  >
                    — Dave Boland, Founder
                  </Typography>
                </Box>
              </Stack>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
}
