'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MainLayout from 'src/layouts/main';
import { HEADER } from 'src/layouts/config-layout';

const LAST_UPDATED = '1 March 2024';

export default function PrivacyView() {
  return (
    <MainLayout>
      <Box
        sx={{
          pt: { xs: `${HEADER.H_MOBILE + 40}px`, md: `${HEADER.H_DESKTOP + 80}px` },
          pb: { xs: 10, md: 15 },
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={5}>
            <Stack spacing={2}>
              <Typography variant="h2" component="h1">
                Privacy Policy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last updated: {LAST_UPDATED}
              </Typography>
            </Stack>

            <Stack spacing={4}>
              <Section title="Introduction">
                <Typography>
                  enableD (&quot;I&quot;, &quot;my&quot;, or &quot;me&quot;) is committed to protecting your privacy.
                  This Privacy Policy explains how I collect, use, disclose, and safeguard your information
                  when you use the enableD reasonable adjustments platform.
                </Typography>
              </Section>

              <Section title="Information I Collect">
                <Typography component="div">
                  I may collect information about you in a variety of ways, including:
                  <Box component="ul" sx={{ mt: 2, pl: 3 }}>
                    <li>Personal data you provide directly (name, email, company information)</li>
                    <li>Information about reasonable adjustments and accessibility needs</li>
                    <li>Usage data and analytics about how you interact with the platform</li>
                    <li>Technical data such as IP address, browser type, and device information</li>
                  </Box>
                </Typography>
              </Section>

              <Section title="How I Use Your Information">
                <Typography component="div">
                  I use the information I collect to:
                  <Box component="ul" sx={{ mt: 2, pl: 3 }}>
                    <li>Provide, maintain, and improve my services</li>
                    <li>Process and manage reasonable adjustments requests</li>
                    <li>Communicate with you about my services</li>
                    <li>Ensure compliance with legal obligations</li>
                    <li>Protect the security and integrity of the platform</li>
                  </Box>
                </Typography>
              </Section>

              <Section title="Data Sharing and Disclosure">
                <Typography>
                  I do not sell your personal information. I may share your information with third parties
                  only in the following circumstances: with your consent, to comply with legal obligations,
                  to protect my rights, or with service providers who assist in operating the platform.
                </Typography>
              </Section>

              <Section title="Data Security">
                <Typography>
                  I implement appropriate technical and organisational measures to protect your personal
                  information against unauthorised access, alteration, disclosure, or destruction. However,
                  no method of transmission over the Internet is 100% secure.
                </Typography>
              </Section>

              <Section title="Your Rights">
                <Typography component="div">
                  Under applicable data protection laws, you may have the right to:
                  <Box component="ul" sx={{ mt: 2, pl: 3 }}>
                    <li>Access the personal information I hold about you</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to or restrict processing of your data</li>
                    <li>Data portability</li>
                  </Box>
                </Typography>
              </Section>

              <Section title="Contact Me">
                <Typography>
                  If you have questions about this Privacy Policy or my data practices, please contact me at{' '}
                  <Box
                    component="a"
                    href="mailto:privacy@getenabled.co.uk"
                    sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    privacy@getenabled.co.uk
                  </Box>
                </Typography>
              </Section>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </MainLayout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Stack spacing={2}>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      {children}
    </Stack>
  );
}
