'use client';

import NextLink from 'next/link';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';

import MainLayout from 'src/layouts/main';
import { HEADER } from 'src/layouts/config-layout';
import Iconify from 'src/components/iconify';

const PRICING_PLANS = [
  {
    name: 'Starter',
    description: 'Perfect for small organisations getting started with accommodation management.',
    price: '99',
    period: 'per month',
    features: [
      'Up to 50 employees',
      'Basic accommodation workflow',
      'Email support',
      'Standard reporting',
      'Secure document storage',
    ],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing organisations that need more advanced features and support.',
    price: '249',
    period: 'per month',
    features: [
      'Up to 250 employees',
      'Advanced workflow automation',
      'Priority support',
      'Advanced analytics',
      'API access',
      'Custom integrations',
      'Dedicated account manager',
    ],
    buttonText: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Tailored solutions for large organisations with complex requirements.',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited employees',
      'Full customisation',
      '24/7 premium support',
      'Custom reporting',
      'Single sign-on (SSO)',
      'Dedicated infrastructure',
      'On-site training',
      'SLA guarantee',
    ],
    buttonText: 'Contact Sales',
    popular: false,
  },
];

export default function PricingView() {
  return (
    <MainLayout>
      <Box
        sx={{
          pt: { xs: `${HEADER.H_MOBILE + 40}px`, md: `${HEADER.H_DESKTOP + 80}px` },
          pb: { xs: 10, md: 15 },
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={8}>
            <Stack spacing={3} textAlign="center" alignItems="center">
              <Typography variant="h2" component="h1">
                Simple, Transparent Pricing
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ maxWidth: 600, fontWeight: 400 }}
              >
                Choose the plan that fits your organisation. All plans include a 14-day free trial.
              </Typography>
            </Stack>

            <Grid container spacing={4} justifyContent="center">
              {PRICING_PLANS.map((plan) => (
                <Grid item xs={12} md={4} key={plan.name}>
                  <Card
                    sx={{
                      height: '100%',
                      position: 'relative',
                      bgcolor: 'background.paper',
                      boxShadow: (theme) => plan.popular ? theme.shadows[8] : theme.shadows[1],
                      border: plan.popular ? '2px solid' : '1px solid',
                      borderColor: plan.popular ? 'primary.main' : 'divider',
                      transition: 'box-shadow 0.2s ease-in-out',
                      '&:hover': {
                        boxShadow: (theme) => theme.shadows[8],
                      },
                    }}
                  >
                    {plan.popular && (
                      <Chip
                        label="Most Popular"
                        color="primary"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          fontWeight: 600,
                        }}
                      />
                    )}
                    <CardContent sx={{ p: 4 }}>
                      <Stack spacing={4} height="100%">
                        <Stack spacing={1}>
                          <Typography variant="h5" component="h3">
                            {plan.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ minHeight: 48 }}>
                            {plan.description}
                          </Typography>
                        </Stack>

                        <Stack direction="row" alignItems="baseline" spacing={0.5}>
                          {plan.price !== 'Custom' && (
                            <Typography variant="h6" color="text.secondary">
                              £
                            </Typography>
                          )}
                          <Typography variant="h3" component="span">
                            {plan.price}
                          </Typography>
                          {plan.period && (
                            <Typography variant="body2" color="text.secondary">
                              {plan.period}
                            </Typography>
                          )}
                        </Stack>

                        <Stack spacing={2}>
                          {plan.features.map((feature) => (
                            <Stack key={feature} direction="row" spacing={1.5} alignItems="center">
                              <Iconify 
                                icon="solar:check-circle-bold" 
                                width={20} 
                                sx={{ color: 'primary.main', flexShrink: 0 }} 
                              />
                              <Typography variant="body2">
                                {feature}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>

                        <Box sx={{ mt: 'auto', pt: 2 }}>
                          <Button
                            component={NextLink}
                            href="/contact"
                            variant={plan.popular ? 'contained' : 'outlined'}
                            size="large"
                            fullWidth
                            sx={{ fontWeight: 600 }}
                          >
                            {plan.buttonText}
                          </Button>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Stack spacing={2} textAlign="center" alignItems="center">
              <Typography variant="body1" color="text.secondary">
                Need a custom solution? Have questions about which plan is right for you?
              </Typography>
              <Button
                component={NextLink}
                href="/contact"
                variant="text"
                sx={{ fontWeight: 600 }}
              >
                Contact our sales team
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  );
}
