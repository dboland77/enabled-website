import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

const currentYear = new Date().getFullYear();

const LINKS = [
  {
    headline: 'Enabled',
    children: [
      { name: 'About', href: paths.about },
      { name: 'FAQs', href: paths.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [{ name: 'hello@getenabled.co.uk', href: paths.contact }],
  },
];

export default function Footer() {
  const pathname = usePathname();

  const homePage = pathname === '/';

  const simpleFooter = (
    <Box
      component="footer"
      sx={{
        py: 5,
        textAlign: 'center',
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Logo sx={{ mb: 1, mx: 'auto' }} />

        <Typography variant="caption" component="div">
          © {currentYear} All rights reserved
        </Typography>
      </Container>
    </Box>
  );

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.default',
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 10,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Logo sx={{ mb: 3 }} />

        <Grid
          container
          justifyContent={{
            xs: 'center',
            md: 'space-between',
          }}
        >
          <Grid xs={8} md={3}>
            <Typography
              variant="body2"
              sx={{
                maxWidth: 270,
                mx: { xs: 'auto', md: 'unset' },
              }}
            >
              Disability accommodations in the workplace made easy with EnableD.
            </Typography>

            <Stack
              direction="row"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{
                mt: 3,
                mb: { xs: 5, md: 0 },
              }}
            >
              <Link
                key={'linkedIn'}
                component={RouterLink}
                href={'https://www.linkedin.com/company/enabled-app/'}
                color="inherit"
                variant="body2"
              >
                <IconButton
                  key={'linkedin'}
                  sx={{
                    '&:hover': {
                      bgcolor: alpha('#123456', 0.08),
                    },
                  }}
                >
                  <Iconify color={'blue'} icon={'skill-icons:linkedin'} />
                </IconButton>
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 10 }}>
          © {currentYear}. All rights reserved
        </Typography>
      </Container>
    </Box>
  );

  return homePage ? mainFooter : mainFooter;
}
