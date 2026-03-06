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
    answer: 'enableD is a digital platform designed to streamline workplace accommodation processes. We help organisations support employees with disabilities and health conditions by making the reasonable adjustments process simple, transparent, and compliant with UK legislation like the Equality Act 2010.',
  },
  {
    question: 'Who can use enableD?',
    answer: 'enableD is designed for both employers and employees. HR teams and managers can use the platform to manage accommodation requests efficiently, while employees can easily submit and track their requests for reasonable adjustments.',
  },
  {
    question: 'What are reasonable adjustments?',
    answer: 'Reasonable adjustments are changes an employer makes to remove or reduce a disadvantage related to an employee\'s disability. Examples include flexible working hours, modified equipment, changes to the physical workplace, or adjusted duties. Under the Equality Act 2010, employers have a legal duty to make reasonable adjustments.',
  },
  {
    question: 'How does enableD ensure compliance with the Equality Act 2010?',
    answer: 'enableD is built with UK employment law at its core. The platform guides users through the accommodation process with built-in compliance checks, documentation templates, and audit trails that help organisations meet their legal obligations while treating employees with dignity.',
  },
  {
    question: 'Is my data secure on enableD?',
    answer: 'Yes, we take data security very seriously. enableD uses industry-standard encryption, secure data storage, and strict access controls to protect sensitive information. We are fully compliant with GDPR and UK data protection regulations.',
  },
  {
    question: 'How long does it take to set up enableD?',
    answer: 'Most organisations can be up and running within a day. Our onboarding team provides guidance and support to ensure a smooth implementation, including data migration assistance and staff training if needed.',
  },
  {
    question: 'Can enableD integrate with our existing HR systems?',
    answer: 'Yes, enableD offers integration capabilities with popular HR and payroll systems. Contact our team to discuss your specific integration requirements.',
  },
  {
    question: 'What support do you offer?',
    answer: 'We provide comprehensive support including email and phone assistance, detailed documentation, and regular check-ins for enterprise customers. Our team is dedicated to helping you get the most out of enableD.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a free trial so you can explore the platform and see how enableD can benefit your organisation. Contact us to get started.',
  },
  {
    question: 'How do I get started with enableD?',
    answer: 'Getting started is easy. Simply click the "Get in Touch" button to contact our team, and we\'ll guide you through the process of setting up enableD for your organisation.',
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
                Find answers to common questions about enableD and workplace accommodations.
              </Typography>
            </Stack>

            <Stack spacing={2}>
              {FAQ_DATA.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                  sx={{
                    bgcolor: 'background.paper',
                    boxShadow: (theme) => theme.shadows[1],
                    '&:before': { display: 'none' },
                    borderRadius: '8px !important',
                    '&.Mui-expanded': {
                      margin: 0,
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<Iconify icon="solar:alt-arrow-down-linear" width={20} />}
                    sx={{
                      px: 3,
                      py: 1,
                      '& .MuiAccordionSummary-content': {
                        my: 2,
                      },
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={600}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3 }}>
                    <Typography color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>

            <Box
              sx={{
                textAlign: 'center',
                mt: 4,
                p: 4,
                borderRadius: 2,
                bgcolor: 'primary.main',
              }}
            >
              <Typography variant="h6" sx={{ color: 'common.white', mb: 1 }}>
                Still have questions?
              </Typography>
              <Typography variant="body2" sx={{ color: 'common.white', opacity: 0.9 }}>
                Contact us at{' '}
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
