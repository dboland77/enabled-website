'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import MainLayout from 'src/layouts/main';
import { HEADER } from 'src/layouts/config-layout';

const LAST_UPDATED = '1 March 2024';

export default function TermsView() {
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
                Terms and Conditions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last updated: {LAST_UPDATED}
              </Typography>
            </Stack>

            <Stack spacing={4}>
              <Section title="1. Agreement to Terms">
                <Typography>
                  By accessing or using the EnableD platform, you agree to be bound by these Terms and Conditions. 
                  If you disagree with any part of these terms, you may not access our services.
                </Typography>
              </Section>

              <Section title="2. Description of Service">
                <Typography>
                  EnableD provides a digital platform designed to streamline workplace accommodation processes, 
                  helping organisations support employees with disabilities and health conditions effectively 
                  and in compliance with relevant legislation.
                </Typography>
              </Section>

              <Section title="3. User Accounts">
                <Typography component="div">
                  When you create an account with us, you must:
                  <Box component="ul" sx={{ mt: 2, pl: 3 }}>
                    <li>Provide accurate, complete, and current information</li>
                    <li>Maintain the security of your password and account</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorised use</li>
                  </Box>
                </Typography>
              </Section>

              <Section title="4. Acceptable Use">
                <Typography component="div">
                  You agree not to:
                  <Box component="ul" sx={{ mt: 2, pl: 3 }}>
                    <li>Use the service for any unlawful purpose</li>
                    <li>Attempt to gain unauthorised access to any part of the service</li>
                    <li>Interfere with or disrupt the service or servers</li>
                    <li>Upload malicious code or content</li>
                    <li>Impersonate any person or entity</li>
                  </Box>
                </Typography>
              </Section>

              <Section title="5. Intellectual Property">
                <Typography>
                  The EnableD platform, including its original content, features, and functionality, 
                  is owned by EnableD and protected by international copyright, trademark, and other 
                  intellectual property laws.
                </Typography>
              </Section>

              <Section title="6. Limitation of Liability">
                <Typography>
                  EnableD shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of or inability to use the service. 
                  Our total liability shall not exceed the amount paid by you for the service in 
                  the twelve months preceding the claim.
                </Typography>
              </Section>

              <Section title="7. Termination">
                <Typography>
                  We may terminate or suspend your account and access to the service immediately, 
                  without prior notice or liability, for any reason, including breach of these Terms.
                </Typography>
              </Section>

              <Section title="8. Governing Law">
                <Typography>
                  These Terms shall be governed by and construed in accordance with the laws of 
                  England and Wales, without regard to its conflict of law provisions.
                </Typography>
              </Section>

              <Section title="9. Changes to Terms">
                <Typography>
                  We reserve the right to modify these terms at any time. We will notify users of 
                  any material changes by posting the new Terms on this page and updating the 
                  &quot;Last updated&quot; date.
                </Typography>
              </Section>

              <Section title="10. Contact Us">
                <Typography>
                  If you have questions about these Terms, please contact us at{' '}
                  <Box
                    component="a"
                    href="mailto:legal@getenabled.co.uk"
                    sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    legal@getenabled.co.uk
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
