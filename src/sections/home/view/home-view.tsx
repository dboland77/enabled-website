'use client';

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MainLayout from 'src/layouts/main';
import { ContactView } from 'src/sections/contact/view';

import ScrollProgress from 'src/components/scroll-progress';

import HomeEnabled from '../home-enabled';
import HomeFeatures from '../home-features';
import HomeFAQ from '../home-faq';
import HomeForDesigner from '../home-for-designer';

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <HomeEnabled />
        <HomeFeatures />

        <HomeFAQ />

        <ContactView />
      </Box>
    </MainLayout>
  );
}
