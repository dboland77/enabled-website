'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import MainLayout from 'src/layouts/main';
import { HEADER } from 'src/layouts/config-layout';
import Iconify from 'src/components/iconify';

const NAVY = '#1a2e3a';
const TEAL = '#2596be';
const TEAL_DARK = '#1a7fa8';

const PRICING_PLANS = [
  {
    name: 'Starter',
    description: 'For organisations with up to 150 employees.',
    price: '149',
    features: [
      'Employee passport for every staff member',
      'Adjustment request and approval workflow',
      'Full audit trail — every request, decision, and update timestamped',
      'Secure document storage',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    description: 'For organisations with up to 500 employees.',
    price: '299',
    features: [
      'Everything in Starter, plus:',
      'Reporting and analytics',
      'Priority support',
    ],
  },
];

export default function PricingView() {
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
          <Stack spacing={3} alignItems={{ xs: 'flex-start', md: 'flex-start' }} sx={{ maxWidth: 680 }}>
            <Typography
              component="h1"
              sx={{
                fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', sans-serif",
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: 'common.white',
              }}
            >
              Simple, transparent pricing
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.82)',
                maxWidth: 580,
              }}
            >
              Two plans. No hidden fees. No long-term contracts. Cancel any time. Both include a
              14-day free trial.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Plans */}
      <Box sx={{ bgcolor: 'background.default', py: { xs: 10, md: 14 } }}>
        <Container maxWidth="md">
          <Stack spacing={8}>
            <Grid container spacing={4} justifyContent="center">
              {PRICING_PLANS.map((plan) => (
                <Grid item xs={12} sm={6} key={plan.name}>
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'background.paper',
                      boxShadow: 'none',
                      border: '2px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                      transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                      '&:hover': {
                        borderColor: TEAL,
                        boxShadow: `0 4px 24px rgba(37,150,190,0.12)`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={4} height="100%">

                        {/* Plan name + description */}
                        <Stack spacing={1}>
                          <Typography
                            variant="h5"
                            component="h2"
                            sx={{ fontWeight: 700, color: NAVY }}
                          >
                            {plan.name}
                          </Typography>
                          <Typography sx={{ fontSize: '1rem', color: 'text.primary' }}>
                            {plan.description}
                          </Typography>
                        </Stack>

                        {/* Price */}
                        <Stack direction="row" alignItems="baseline" spacing={0.5}>
                          <Typography
                            sx={{ fontSize: '1.25rem', fontWeight: 700, color: 'text.primary', lineHeight: 1 }}
                          >
                            £
                          </Typography>
                          <Typography
                            component="span"
                            sx={{
                              fontFamily: "'Atkinson Hyperlegible Next', 'Atkinson Hyperlegible', sans-serif",
                              fontWeight: 800,
                              fontSize: { xs: '2.5rem', md: '3rem' },
                              lineHeight: 1,
                              color: NAVY,
                              letterSpacing: '-0.02em',
                            }}
                          >
                            {plan.price}
                          </Typography>
                          <Typography sx={{ fontSize: '0.9375rem', color: 'text.primary', ml: 0.5 }}>
                            / month
                          </Typography>
                        </Stack>

                        {/* Features */}
                        <Stack spacing={2} sx={{ flexGrow: 1 }}>
                          {plan.features.map((feature) => (
                            <Stack key={feature} direction="row" spacing={1.5} alignItems="flex-start">
                              <Iconify
                                icon="solar:check-circle-bold"
                                width={20}
                                sx={{ color: TEAL_DARK, flexShrink: 0, mt: '2px' }}
                              />
                              <Typography sx={{ fontSize: '1rem', color: 'text.primary', lineHeight: 1.6 }}>
                                {feature}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>

                        {/* CTA */}
                        <Box sx={{ pt: 1 }}>
                          <Button
                            component="a"
                            href="/contact"
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{
                              fontWeight: 700,
                              fontSize: '1rem',
                              bgcolor: NAVY,
                              '&:hover': { bgcolor: TEAL_DARK },
                              transition: 'background-color 0.2s ease-in-out',
                            }}
                          >
                            Get Started →
                          </Button>
                        </Box>

                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Bottom note */}
            <Stack spacing={1} textAlign="center" alignItems="center">
              <Typography sx={{ fontSize: '1rem', color: 'text.primary' }}>
                Not sure which plan fits your organisation? Get in touch and I can work it out with
                you.
              </Typography>
              <Box
                component="a"
                href="mailto:hello@getenabled.co.uk"
                sx={{
                  color: TEAL_DARK,
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                hello@getenabled.co.uk
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  );
}
