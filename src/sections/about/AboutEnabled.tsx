import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import { m } from 'framer-motion';

import Logo from 'src/components/logo';
import { varFade, MotionViewport } from 'src/components/animate';

const HIGHLIGHTS = [
  {
    title: 'For Employees',
    description:
      'Request modifications seamlessly with a user-friendly interface. Your voice is heard and your needs are addressed promptly.',
  },
  {
    title: 'For Employers',
    description:
      'Simplify tracking, managing, and reporting on reasonable adjustments while supporting legal compliance and reducing administrative burden.',
  },
  {
    title: 'For Everyone',
    description:
      'Build workplaces where every individual can thrive, with diversity and inclusion at the core of organisational success.',
  },
];

const AboutEnabled = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: alpha(theme.palette.grey[500], 0.04),
      }}
    >
      <Container component={MotionViewport}>
        <Stack spacing={5} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
          <m.div variants={varFade().inUp}>
            <Logo sx={{ width: 80, height: 80 }} />
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ maxWidth: 720 }}>
              About enableD
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 800,
                lineHeight: 1.8,
              }}
            >
              enableD is at the forefront of creating a more inclusive and accessible workplace for
              employees with disabilities. Our mission is to simplify the process of requesting and
              managing reasonable adjustments, ensuring that both employees and employers can
              navigate this crucial aspect of workplace inclusivity with ease.
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                maxWidth: 800,
                lineHeight: 1.8,
              }}
            >
              We understand that each employee&apos;s needs are unique, and so are the challenges
              faced by employers in meeting those needs. Our innovative platform streamlines the
              adjustment request process, integrating compliance with legal requirements to help
              businesses fulfil their obligations while fostering a culture of equity and support.
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={4}
          display="grid"
          gridTemplateColumns={{ xs: '1fr', md: 'repeat(3, 1fr)' }}
        >
          {HIGHLIGHTS.map((item, index) => (
            <m.div key={item.title} variants={varFade().inUp}>
              <Box
                sx={{
                  p: 4,
                  height: '100%',
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  boxShadow: `0 8px 24px ${alpha(theme.palette.grey[500], 0.12)}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: `0 16px 32px ${alpha(theme.palette.grey[500], 0.16)}`,
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    color: 'primary.main',
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.7,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </m.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutEnabled;
