'use client';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { alpha, useTheme } from '@mui/material/styles';

import Iconify from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

const FAQS = [
  {
    question: 'Who is enableD for?',
    answer:
      'enableD is for employees with disabilities and their employers who are committed to creating an inclusive workplace.',
  },
  {
    question: 'What is enableD?',
    answer:
      'enableD is an easy-to-use app that streamlines the process of requesting and managing disability accommodations in the workplace. With enableD, employees can quickly and easily request the accommodations they need, while employers can efficiently manage these requests and ensure compliance with legal requirements.',
  },
  {
    question: 'Why would I need enableD?',
    answer:
      'Disability accommodations can be a complex and time-consuming process, and many employers are unaware of their legal obligations when it comes to accommodating employees with disabilities. enableD solves these problems by creating a more efficient, compliant, workplace.',
  },
  {
    question: 'Where can I access enableD?',
    answer:
      'enableD is available as a web-based app, accessible from any device with an internet connection. It can be used by employees and employers across a wide range of industries and organisations.',
  },
  {
    question: 'When can I start using enableD?',
    answer:
      'enableD is available now, and can be implemented in your workplace today to start creating a more inclusive and accessible environment.',
  },
  {
    question: 'How do I get started with enableD?',
    answer:
      'Getting started with enableD is easy - simply sign up and start using the app to request and manage disability accommodations. Our support team is available to answer any questions you may have, and to provide assistance with implementing the app in your workplace.',
  },
];

export default function FAQ() {
  const theme = useTheme();

  return (
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
        <Stack
          spacing={4}
          alignItems="center"
          sx={{
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto',
            mb: { xs: 6, md: 10 },
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
              Support
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
              Frequently Asked
              <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                Questions
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
              Everything you need to know about enableD and how it can transform your workplace.
            </Typography>
          </m.div>
        </Stack>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {FAQS.map((faq) => (
            <m.div key={faq.question} variants={varFade().inUp}>
              <Accordion
                sx={{
                  mb: 2,
                  borderRadius: '12px !important',
                  bgcolor: 'background.paper',
                  border: `1px solid ${alpha(theme.palette.grey[500], 0.12)}`,
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': {
                    borderColor: 'primary.main',
                    boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.12)}`,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <Iconify icon="solar:alt-arrow-down-linear" sx={{ color: 'primary.main' }} />
                  }
                  sx={{
                    px: 3,
                    py: 1,
                    '& .MuiAccordionSummary-content': { my: 2 },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3 }}>
                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </m.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
