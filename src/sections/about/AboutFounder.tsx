'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { m } from 'framer-motion';

import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';

const AboutFounder = () => {
  const theme = useTheme();

  return (
    <Container component={MotionViewport} sx={{ py: { xs: 8, md: 12 } }}>
      <Box
        gap={{ xs: 5, md: 8 }}
        display="grid"
        gridTemplateColumns={{ xs: '1fr', md: '1fr 2fr' }}
        alignItems="start"
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
              sx={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </m.div>

        <Stack spacing={4}>
          <m.div variants={varFade().inRight}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 700,
                letterSpacing: 1.5,
              }}
            >
              Meet the Founder
            </Typography>

            <Typography variant="h3" sx={{ mt: 1, mb: 3 }}>
              Dave Boland
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              Dave Boland is a distinguished professional with a background in actuarial science and
              insurance risk modelling. With 15 years of experience, Dave has driven innovative risk
              assessment initiatives that enhance financial stability.
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
              }}
            >
              He graduated top of his class in Computer Science and Mathematics, earning an award
              from the university President for maintaining a GPA above 3.5. Dave&apos;s academic
              credentials include serving as a senior lecturer and programme director at Queen Mary
              University of London, where he developed and delivered a module for the Master&apos;s
              in Business Analytics.
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
                sx={{
                  color: 'text.primary',
                  fontStyle: 'italic',
                  lineHeight: 1.8,
                }}
              >
                As an autistic individual with sensory needs and communication differences, Dave
                found traditional workplaces largely inaccessible - a challenge faced by 65% of
                disabled individuals in the UK. He chose entrepreneurship to create solutions that
                ensure future generations, including his own children, never encounter these
                barriers.
              </Typography>
            </Box>
          </m.div>
        </Stack>
      </Box>
    </Container>
  );
};

export default AboutFounder;
