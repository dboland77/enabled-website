import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

const FAQS = [
  {
    icon: '/assets/icons/home/ic_make_brand.svg',
    title: 'Who is EnableD for?',
    description:
      'EnableD is for employees with disabilities and their employers who are committed to creating an inclusive workplace.',
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'What is EnableD?',
    description:
      'EnableD is an easy-to-use app that streamlines the process of requesting and managing disability accommodations in the workplace. With EnableD, employees can quickly and easily request the accommodations they need, while employers can efficiently manage these requests and ensure compliance with legal requirements.',
  },
  {
    icon: '/assets/icons/home/ic_development.svg',
    title: 'Why would I need EnableD?',
    description:
      'Disability accommodations can be a complex and time-consuming process, and many employers are unaware of their legal obligations when it comes to accommodating employees with disabilities. EnableD solves these problems by creating a more efficient, compliant, workplace.',
  },
  {
    icon: '/assets/icons/home/ic_make_brand.svg',
    title: 'Where can I access EnableD?',
    description:
      'EnableD is available as a web-based app, accessible from any device with an internet connection. It can be used by employees and employers across a wide range of industries and organisations.',
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'When can I start using EnableD?',
    description:
      'EnableD is available now, and can be implemented in your workplace today to start creating a more inclusive and accessible environment.',
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'How do I get started with EnableD?',
    description:
      'Getting started with EnableD is easy - simply sign up and start using the app to request and manage disability accommodations. Our support team is available to answer any questions you may have, and to provide assistance with implementing the app in your workplace.',
  },
];

export default function HomeFAQ() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Box
        gap={{ xs: 3, lg: 10 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
        }}
      >
        {FAQS.map((faq, index) => (
          <m.div variants={varFade().inUp} key={faq.title}>
            <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
              {faq.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{faq.description}</Typography>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
