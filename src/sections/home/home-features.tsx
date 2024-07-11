import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

const FEATURES = [
  {
    icon: '/assets/icons/home/ic_make_brand.svg',
    title: 'Customised Adjustments',
    description: `We understand that each disability is unique, so we have designed our system to allow employees to request the adjustments they need.
    
    Our platform allows employers to create customised adjustment plans for each employee, ensuring that they get the support they need.`,
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'Easy Communication',
    description: `Communication is key when it comes to disability adjustments. 
    
    EnableD allows employees and employers to communicate seamlessly, ensuring that everyone is on the same page.`,
  },
  {
    icon: '/assets/icons/home/ic_development.svg',
    title: 'Compliance Tracking',
    description: `EnableD helps employers stay compliant with disability laws and regulations. 
    
    We provide easy-to-use tools that allow you to track adjustments, making it simple to stay on top of your legal obligations.`,
  },
  {
    icon: '/assets/icons/home/ic_make_brand.svg',
    title: 'Data Analytics',
    description: `Our system allows employers to track and analyse adjustment requests, providing valuable insights into employee needs and preferences`,
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'Personal Adjustment Passport.',
    description: `EnableD allows employees to build up a profile of adjustments that work for them and their unique needs. 
    
    This profile can be exported and used wherever it is needed - not just in the workplace.`,
  },
];

export default function HomeFeatures() {
  return (
    <Box
      gap={{ xs: 3, lg: 10 }}
      display="grid"
      alignItems="center"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
      }}
    >
      {FEATURES.map((feature, index) => (
        <m.div variants={varFade().inUp} key={feature.title}>
          <Card
            sx={{
              textAlign: 'center',
              boxShadow: { md: 'none' },
              bgcolor: 'background.default',
              p: (theme) => theme.spacing(10, 5),
              ...(index === 1 && {
                boxShadow: (theme) => ({
                  md: `-40px 40px 80px ${
                    theme.palette.mode === 'light'
                      ? alpha(theme.palette.grey[500], 0.16)
                      : alpha(theme.palette.common.black, 0.4)
                  }`,
                }),
              }),
            }}
          >
            <Box
              component="img"
              src={feature.icon}
              alt={feature.title}
              sx={{ mx: 'auto', width: 48, height: 48 }}
            />

            <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
              {feature.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}>{feature.description}</Typography>
          </Card>
        </m.div>
      ))}
    </Box>
  );
}
