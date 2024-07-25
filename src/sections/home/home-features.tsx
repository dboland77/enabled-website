import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const FEATURES = [
  {
    icon: '/assets/icons/home/ic_make_brand.svg',
    title: 'Customised Adjustments',
    description: `We understand that each disability is unique.
    Our platform allows for the creation of customised adjustment plans for each employee, ensuring that they get the support they need.`,
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'Easy Communication',
    description: `Communication is key when it comes to disability adjustments. 
    
    enableD allows employees and employers to communicate seamlessly, ensuring that everyone is on the same page.`,
  },
  {
    icon: '/assets/icons/home/ic_development.svg',
    title: 'Compliance Tracking',
    description: `enableD helps employers comply with disability laws by providing easy-to-use tools for tracking adjustments, ensuring they stay on top of their legal obligations.`,
  },
  {
    icon: '/assets/icons/home/ic_make_brand.svg',
    title: 'Data Analytics',
    description: `enableD allows employers to track and analyse adjustment requests, providing valuable insights into employee needs and preferences.`,
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'Adjustments Passport.',
    description: `enableD lets employees create a profile of adjustments tailored to their unique needs. This profile can be exported and used beyond the workplace.`,
  },
];

export default function HomeFeatures() {
  return (
    <Container sx={{ mb: 3 }}>
      <Box
        gap={{ xs: 5, lg: 10 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {FEATURES.map((feature, index) => (
          <Card
            sx={{
              mx: {
                minHeight: 420,
              },
              textAlign: 'left',
              bgcolor: 'background.default',
              p: (theme) => theme.spacing(2, 5),

              boxShadow: (theme) => ({
                md: `-30px 30px 80px`,
              }),
            }}
          >
            <CardContent>
              <Box
                component="img"
                src={feature.icon}
                alt={feature.title}
                sx={{ mx: 'auto', width: 48, height: 48 }}
              />

              <Typography variant="h5" sx={{ mt: 3, mb: 2 }}>
                {feature.title}
              </Typography>

              <Typography sx={{ color: 'text.primary' }}>{feature.description}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
