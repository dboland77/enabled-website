'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import MainLayout from 'src/layouts/main';
import { HEADER } from 'src/layouts/config-layout';
import Iconify from 'src/components/iconify';

const FAQ_DATA = [
  {
    question: 'What is enableD?',
    answer: 'enableD is a digital platform designed to streamline the reasonable adjustments process. I help organisations support employees with disabilities and health conditions by making reasonable adjustments simple, transparent, and compliant with UK legislation like the Equality Act 2010.',
  },
  {
    question: 'Who can use enableD?',
    answer: 'enableD is designed for both employers and employees. HR teams and managers can use the platform to manage reasonable adjustments efficiently, while employees can easily submit and track their own requests.',
  },
  {
    question: 'What are reasonable adjustments?',
    answer: 'Reasonable adjustments are changes an employer makes to remove or reduce a disadvantage related to an employee\'s disability. Examples include flexible working hours, modified equipment, changes to the physical workplace, or adjusted duties. Under the Equality Act 2010, employers have a legal duty to make reasonable adjustments.',
  },
  {
    question: 'How does enableD ensure compliance with the Equality Act 2010?',
    answer: 'enableD is built with UK employment law at its core. The platform guides users through the reasonable adjustments process with built-in compliance checks, documentation templates, and audit trails that help organisations meet their legal obligations while treating employees with dignity.',
  },
  {
    question: 'Is my data secure on enableD?',
    answer: 'Yes, I take data security very seriously. enableD uses industry-standard encryption, secure data storage, and strict access controls to protect sensitive information. I am fully compliant with GDPR and UK data protection regulations.',
  },
  {
    question: 'How long does it take to set up enableD?',
    answer: 'Most organisations can be up and running within a day. I provide guidance and support to ensure a smooth implementation, including data migration assistance and training if needed.',
  },
  {
    question: 'What support do you offer?',
    answer: 'I provide comprehensive support including email and phone assistance, detailed documentation, and regular check-ins. I am dedicated to helping you get the most out of enableD.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, I offer a free trial so you can explore the platform and see how enableD can benefit your organisation. Get in touch to get started.',
  },
  {
    question: 'How do I get started with enableD?',
    answer: 'Getting started is easy. Simply click the "Book a Call" button to schedule time with me, and I\'ll guide you through the process of setting up enableD for your organisation.',
  },
];

export default function FaqView() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <MainLayout>
      <Box
        sx={{
          pt: { xs: `${HEADER.H_MOBILE + 40}px`, md: `${HEADER.H_DESKTOP + 60}px` },
          pb: { xs: 8, md: 12 },
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={5}>
            <Stack spacing={2} textAlign="center">
              <Typography variant="h2" component="h1">
                Frequently Asked Questions
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                Find answers to common questions about enableD and reasonable adjustments.
              </Typography>
            </Stack>

            <Stack spacing={2}>
              {FAQ_DATA.map((faq, index) => {
                const bg = index % 2 === 0 ? '#1a2e3a' : '#1a7fa8';
                return (
                  <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}
                    sx={{
                      backgroundColor: bg,
                      boxShadow: 'none',
                      '&:before': { display: 'none' },
                      borderRadius: '8px !important',
                      '&.Mui-expanded': { margin: 0 },
                      '& .MuiAccordionSummary-root': { backgroundColor: bg },
                      '& .MuiAccordionDetails-root': { backgroundColor: bg },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<Iconify icon="solar:alt-arrow-down-linear" width={20} sx={{ color: 'white' }} />}
                      sx={{
                        px: 3,
                        py: 1,
                        borderRadius: '8px',
                        '& .MuiAccordionSummary-content': { my: 2 },
                      }}
                    >
                      <Typography fontWeight={600} sx={{ fontSize: '1.125rem', color: 'white' }}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 3, pb: 3 }}>
                      <Typography sx={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)' }}>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Stack>

            <Box
              sx={{
                textAlign: 'center',
                mt: 4,
                p: 4,
                borderRadius: 2,
                bgcolor: '#1a2e3a',
              }}
            >
              <Typography variant="h6" sx={{ color: 'common.white', mb: 1 }}>
                Still have questions?
              </Typography>
              <Typography variant="body2" sx={{ color: 'common.white', opacity: 0.9 }}>
                Contact me at{' '}
                <Box
                  component="a"
                  href="mailto:hello@getenabled.co.uk"
                  sx={{
                    color: 'common.white',
                    textDecoration: 'underline',
                    '&:hover': { opacity: 0.8 },
                  }}
                >
                  hello@getenabled.co.uk
                </Box>
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  );
}
