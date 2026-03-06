import NextLink from 'next/link';

import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Logo from 'src/components/logo';

const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
  { label: 'Accessibility', href: '/accessibility' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        bgcolor: 'background.neutral',
      }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          spacing={3}
        >
          <Stack alignItems={{ xs: 'center', md: 'flex-start' }} spacing={2}>
            <Logo />
            <Typography variant="body2" color="text.secondary">
              Workplace accommodations made easy.
            </Typography>
          </Stack>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent={{ xs: 'center', md: 'flex-end' }}
            spacing={{ xs: 2, md: 4 }}
          >
            {FOOTER_LINKS.map((link) => (
              <MuiLink
                key={link.label}
                component={NextLink}
                href={link.href}
                underline="none"
                sx={{
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s ease-in-out',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Stack>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="text.secondary">
            {currentYear} EnableD. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={3}>
            <MuiLink
              href="mailto:hello@getenabled.co.uk"
              underline="none"
              sx={{
                color: 'text.secondary',
                fontSize: '0.875rem',
                '&:hover': { color: 'primary.main' },
              }}
            >
              hello@getenabled.co.uk
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
