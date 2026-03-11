'use client';

import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const FOOTER_LINKS = [
  { label: 'Blog', href: '/blog' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

export default function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    router.push(href);
  };

  return (
    <Box
      component="footer"
      sx={{
        py: 2.5,
        bgcolor: 'primary.main',
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ color: 'common.white' }}>
            {currentYear} enableD. All rights reserved.
          </Typography>
          <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={{ xs: 2, md: 3 }}>
            {FOOTER_LINKS.map((link) => (
              <Box
                key={link.label}
                component="button"
                onClick={() => handleNavClick(link.href)}
                sx={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'common.white',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  padding: 0,
                  transition: 'opacity 0.2s ease-in-out',
                  '&:hover': {
                    opacity: 0.8,
                  },
                }}
              >
                {link.label}
              </Box>
            ))}
          </Stack>
          <Link
            href="mailto:hello@getenabled.co.uk"
            underline="none"
            sx={{
              color: 'common.white',
              fontSize: '1rem',
              '&:hover': { opacity: 0.8 },
            }}
          >
            hello@getenabled.co.uk
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
