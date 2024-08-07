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
      { name: 'Features', href: '#' },
      { name: 'FAQ', href: paths.faq },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Privacy Policy', href: paths.privacypolicy },
      { name: 'Cookies Policy', href: paths.cookies },
    ],
  },
  {
    headline: 'Contact',
    children: [{ name: 'hello@getenabled.co.uk', href: 'mailto:hello@getenabled.co.uk' }],
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
          pt: 1,
          pb: 1,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Logo sx={{ mb: 1 }} />

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
              Reasonable adjustments in the workplace made easy with enableD.
            </Typography>

            <Link
              key="linkedIn"
              component={RouterLink}
              href="https://www.linkedin.com/company/enabled-app/"
              color="inherit"
              variant="body2"
            >
              <IconButton
                key="linkedin"
                sx={{
                  mt: 1,
                  paddingLeft: 0,
                  '&:hover': {
                    bgcolor: alpha('#123456', 0.08),
                  },
                }}
              >
                <Iconify width={35} color="blue" icon="skill-icons:linkedin" />
              </IconButton>
            </Link>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ mt: { md: -8 } }}>
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                  sx={{ width: 1 }}
                >
                  <Typography component="div" variant="h4">
                    {list.headline.toLocaleUpperCase()}
                  </Typography>

                  {list.children.map((link) => (
                    <Link key={link.name} component={RouterLink} href={link.href} color="inherit">
                      {link.name.toLocaleUpperCase()}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 1 }}>
          © {currentYear}. All rights reserved
        </Typography>
      </Container>
    </Box>
  );

  return homePage ? mainFooter : simpleFooter;
}
