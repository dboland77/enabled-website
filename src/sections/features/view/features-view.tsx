'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import MainLayout from 'src/layouts/main';
import { HEADER } from 'src/layouts/config-layout';
import Iconify from 'src/components/iconify';

const FEATURES = [
  {
    icon: 'solar:clipboard-check-bold',
    title: 'Streamlined Accommodation Requests',
    description: 'Simplify the process of requesting and managing workplace accommodations with our intuitive digital workflow.',
  },
  {
    icon: 'solar:shield-check-bold',
    title: 'Compliance Management',
    description: 'Stay compliant with disability legislation including the Equality Act 2010 and ensure best practices are followed.',
  },
  {
    icon: 'solar:users-group-rounded-bold',
    title: 'Employee Self-Service',
    description: 'Empower employees to submit and track their accommodation requests through a secure, accessible portal.',
  },
  {
    icon: 'solar:chart-bold',
    title: 'Analytics & Reporting',
    description: 'Gain insights into accommodation trends, response times, and outcomes with comprehensive reporting tools.',
  },
  {
    icon: 'solar:lock-bold',
    title: 'Secure & Confidential',
    description: 'Protect sensitive employee information with enterprise-grade security and strict access controls.',
  },
  {
    icon: 'solar:refresh-circle-bold',
    title: 'Automated Workflows',
    description: 'Reduce manual tasks with automated notifications, reminders, and approval processes.',
  },
  {
    icon: 'solar:document-text-bold',
    title: 'Documentation Management',
    description: 'Centralise all accommodation-related documents, assessments, and correspondence in one place.',
  },
  {
    icon: 'solar:hand-shake-bold',
    title: 'Collaboration Tools',
    description: 'Enable seamless communication between HR, managers, employees, and external assessors.',
  },
];

export default function FeaturesView() {
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
                Features
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ maxWidth: 600, fontWeight: 400 }}
              >
                Everything you need to manage workplace accommodations effectively, 
                compliantly, and with dignity for all employees.
              </Typography>
            </Stack>

            <Grid container spacing={4}>
              {FEATURES.map((feature) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={feature.title}>
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'background.paper',
                      boxShadow: (theme) => theme.shadows[1],
                      transition: 'box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out',
                      '&:hover': {
                        boxShadow: (theme) => theme.shadows[4],
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack spacing={2}>
                        <Box
                          sx={{
                            width: 56,
                            height: 56,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 2,
                            bgcolor: 'primary.main',
                            color: 'primary.contrastText',
                          }}
                        >
                          <Iconify icon={feature.icon} width={28} />
                        </Box>
                        <Typography variant="h6" component="h3">
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {feature.description}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  );
}
