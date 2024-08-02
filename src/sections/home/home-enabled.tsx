import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';
import { primary } from 'src/theme/palette';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';
export default function HomeEnabled() {
  const theme = useTheme();
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h2" color={primary.main}>
            Your Journey to a fairer workplace
            <br />
            starts
            <Link component={RouterLink} href={paths.contact} color="inherit" underline="always">
              {'  '}
              here
            </Link>
          </Typography>
        </m.div>
      </Stack>
    </Container>
  );
}
