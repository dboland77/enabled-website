'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import MainLayout from 'src/layouts/main';
import { HEADER } from 'src/layouts/config-layout';

export default function AboutView() {
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
          <Stack spacing={10}>
            {/* Hero Section */}
            <Stack spacing={3} textAlign="center" alignItems="center">
              <Typography variant="h2" component="h1">
                About EnableD
              </Typography>
              <Typography 
                variant="h6" 
                color="text.secondary" 
                sx={{ maxWidth: 700, fontWeight: 400 }}
              >
                We are on a mission to transform how organisations support employees 
                with disabilities and health conditions in the workplace.
              </Typography>
            </Stack>

            {/* Mission Section */}
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <Typography variant="h4" component="h2">
                    Our Mission
                  </Typography>
                  <Typography color="text.secondary">
                    At EnableD, we believe that every employee deserves the support they need to thrive 
                    in their role. Our mission is to make workplace accommodations simple, transparent, 
                    and dignified for everyone involved.
                  </Typography>
                  <Typography color="text.secondary">
                    We are building technology that bridges the gap between employees who need 
                    accommodations and the organisations that want to support them, removing friction 
                    and stigma from the process.
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    p: 4,
                    borderRadius: 2,
                    bgcolor: 'background.neutral',
                  }}
                >
                  <Stack spacing={3}>
                    <Typography variant="h5">Our Values</Typography>
                    <Stack spacing={2}>
                      <ValueItem 
                        title="Dignity First" 
                        description="We design with empathy, ensuring every interaction respects the individual." 
                      />
                      <ValueItem 
                        title="Transparency" 
                        description="Clear processes and communication at every step of the journey." 
                      />
                      <ValueItem 
                        title="Inclusion" 
                        description="Building a product that is accessible to all users, regardless of ability." 
                      />
                      <ValueItem 
                        title="Compliance" 
                        description="Helping organisations meet their legal obligations effortlessly." 
                      />
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
            </Grid>

            {/* Founder Section */}
            <Stack spacing={4} id="founder">
              <Typography variant="h4" component="h2" textAlign="center">
                About the Founder
              </Typography>
              <Box
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  boxShadow: (theme) => theme.shadows[1],
                }}
              >
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={8}>
                    <Stack spacing={3}>
                      <Typography color="text.secondary">
                        EnableD was founded with a deeply personal understanding of the challenges 
                        faced by employees with disabilities in the workplace. Having experienced 
                        firsthand the complexities of navigating accommodation requests, our founder 
                        recognised the need for a better solution.
                      </Typography>
                      <Typography color="text.secondary">
                        With a background spanning HR technology and accessibility advocacy, they set 
                        out to create a platform that would make the accommodation process smoother 
                        for both employees and employers, while ensuring compliance with legislation 
                        like the Equality Act 2010.
                      </Typography>
                      <Typography color="text.secondary">
                        Today, EnableD is helping organisations across the UK create more inclusive 
                        workplaces where every employee can perform at their best.
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  );
}

function ValueItem({ title, description }: { title: string; description: string }) {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}
