'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

const CALENDLY_URL = 'https://calendly.com/dave-getenabled/30min';

const NAVY = '#1a2e3a';
const TEAL = '#2596be';
const TEAL_DARK = '#1a7fa8';
const TEAL_LIGHT = '#4fb3cc';

// ── HERO ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: NAVY,
        pt: { xs: 16, md: 20 },
        pb: { xs: 12, md: 16 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container component={MotionViewport} maxWidth="md">
        <Stack spacing={5} sx={{ maxWidth: 760 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '2.125rem', sm: '2.75rem', md: '3.375rem' },
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: 'common.white',
              }}
            >
              Most employers think they&apos;re handling reasonable adjustments properly.{' '}
              <Box component="span" sx={{ color: TEAL_LIGHT }}>
                Most aren&apos;t.
              </Box>
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              sx={{
                fontSize: { xs: '1.0625rem', md: '1.1875rem' },
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.78)',
                maxWidth: 620,
              }}
            >
              enableD gives your organisation a clear, auditable process for reasonable adjustments
              — so your employees get what they need, and you can prove it.
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Button
              component="a"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{
                bgcolor: TEAL,
                color: 'common.white',
                fontWeight: 700,
                fontSize: '1rem',
                px: 4.5,
                py: 1.625,
                borderRadius: '8px',
                alignSelf: 'flex-start',
                boxShadow: `0 4px 16px 0 rgba(37,150,190,0.35)`,
                '&:hover': {
                  bgcolor: TEAL_DARK,
                  boxShadow: `0 6px 20px 0 rgba(37,150,190,0.45)`,
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              Book a Call →
            </Button>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}

// ── PROBLEM ───────────────────────────────────────────────────────────────────

function ProblemSection() {
  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 10, md: 14 } }}>
      <Container component={MotionViewport} maxWidth="md">
        <Stack spacing={4} sx={{ maxWidth: 700 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                lineHeight: 1.3,
                letterSpacing: '-0.015em',
                color: 'text.primary',
              }}
            >
              When a reasonable adjustments process is disjointed, everyone loses.
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Stack spacing={2.5}>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                  color: 'text.primary',
                }}
              >
                The employee doesn&apos;t get what they need to do their job. HR is scrambling to piece
                together what was agreed and when. Managers aren&apos;t briefed. Nothing is documented
                properly.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                  color: 'text.primary',
                }}
              >
                When that goes wrong, it doesn&apos;t just cost you an employee. A defended employment
                tribunal costs upwards of £80,000 in legal fees alone — before you count the weeks
                of management time, the witness statements, and the disruption to your business.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                  color: 'text.primary',
                }}
              >
                The uncomfortable truth is that most of that cost is avoidable. Not through good
                intentions, but through a proper process.
              </Typography>
            </Stack>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}

// ── SOLUTION ──────────────────────────────────────────────────────────────────

function SolutionSection() {
  return (
    <Box
      sx={{
        bgcolor: 'grey.100',
        py: { xs: 10, md: 14 },
        borderTop: `1px solid`,
        borderColor: 'divider',
      }}
    >
      <Container component={MotionViewport} maxWidth="md">
        <Stack spacing={4} sx={{ maxWidth: 700 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                lineHeight: 1.3,
                letterSpacing: '-0.015em',
                color: 'text.primary',
              }}
            >
              enableD is a reasonable adjustments platform built around the people who need them.
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Stack spacing={2.5}>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                  color: 'text.primary',
                }}
              >
                Employees request adjustments in their own time, in their own words. Managers
                review, approve, and understand what&apos;s needed. Everything is documented,
                timestamped, and auditable.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                  color: 'text.primary',
                }}
              >
                No more emails lost in inboxes. No more interviewers who weren&apos;t briefed. No more
                scrambling to evidence what was agreed when things go wrong.
              </Typography>
            </Stack>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}

// ── FOUNDER ───────────────────────────────────────────────────────────────────

function FounderSection() {
  return (
    <Box
      sx={{
        bgcolor: NAVY,
        py: { xs: 10, md: 14 },
        borderTop: `4px solid ${TEAL}`,
      }}
    >
      <Container component={MotionViewport} maxWidth="md">
        <Stack spacing={5} sx={{ maxWidth: 680 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                lineHeight: 1.3,
                color: 'common.white',
              }}
            >
              Why I built this
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Stack spacing={2.5}>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                  color: 'rgba(255,255,255,0.82)',
                }}
              >
                I built enableD because I lived the alternative.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                  color: 'rgba(255,255,255,0.82)',
                }}
              >
                I&apos;m autistic. I applied for a job, had a meltdown in an interview because my
                adjustments weren&apos;t handled properly, and spent the next two years in the legal
                system trying to get a fair outcome. I know exactly what a broken process costs —
                not just in legal fees, but in what it does to the person on the other end of it.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                  color: 'rgba(255,255,255,0.82)',
                }}
              >
                No disabled employee should have to fight that hard. And no employer should be
                exposed to that risk because they didn&apos;t have a proper system in place.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '1rem', md: '1.0625rem' },
                  lineHeight: 1.85,
                  color: 'rgba(255,255,255,0.82)',
                  fontStyle: 'italic',
                }}
              >
                That&apos;s why I built this.
              </Typography>
            </Stack>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Box
              sx={{
                display: 'inline-block',
                borderLeft: `3px solid ${TEAL}`,
                pl: 2,
              }}
            >
              <Typography
                sx={{
                  color: TEAL_LIGHT,
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  letterSpacing: '0.01em',
                }}
              >
                — D Boland, Founder, enableD
              </Typography>
            </Box>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}

// ── BOTTOM CTA ────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <Box sx={{ bgcolor: TEAL_DARK, py: { xs: 10, md: 14 } }}>
      <Container component={MotionViewport} maxWidth="md">
        <Stack spacing={5} sx={{ maxWidth: 680 }}>
          <m.div variants={varFade().inUp}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.375rem' },
                lineHeight: 1.3,
                letterSpacing: '-0.015em',
                color: 'common.white',
              }}
            >
              If you&apos;re not confident your current process would stand up to scrutiny, let&apos;s talk.
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.0625rem' },
                lineHeight: 1.85,
                color: 'rgba(255,255,255,0.82)',
              }}
            >
              Book a 30 minute conversation. No pitch, no pressure — just an honest discussion
              about where your organisation is and whether enableD can help.
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Button
              component="a"
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{
                bgcolor: NAVY,
                color: 'common.white',
                fontWeight: 700,
                fontSize: '1rem',
                px: 4.5,
                py: 1.625,
                borderRadius: '8px',
                alignSelf: 'flex-start',
                '&:hover': {
                  bgcolor: '#0f1d25',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            >
              Book a Call →
            </Button>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}

// ── EXPORT ────────────────────────────────────────────────────────────────────

export default function HomeEnabled() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FounderSection />
      <CtaSection />
    </>
  );
}
