import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const FAQS = [
  {
    icon: '/assets/icons/home/ic_make_brand.svg',
    title: 'Who is enableD for?',
    description:
      'enableD is for employees with disabilities and their employers who are committed to creating an inclusive workplace.',
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'What is enableD?',
    description:
      'enableD is an easy-to-use app that streamlines the process of requesting and managing disability accommodations in the workplace. With enableD, employees can quickly and easily request the accommodations they need, while employers can efficiently manage these requests and ensure compliance with legal requirements.',
  },
  {
    icon: '/assets/icons/home/ic_development.svg',
    title: 'Why would I need enableD?',
    description:
      'Disability accommodations can be a complex and time-consuming process, and many employers are unaware of their legal obligations when it comes to accommodating employees with disabilities. enableD solves these problems by creating a more efficient, compliant, workplace.',
  },
  {
    icon: '/assets/icons/home/ic_make_brand.svg',
    title: 'Where can I access enableD?',
    description:
      'enableD is available as a web-based app, accessible from any device with an internet connection. It can be used by employees and employers across a wide range of industries and organisations.',
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'When can I start using enableD?',
    description:
      'enableD is available now, and can be implemented in your workplace today to start creating a more inclusive and accessible environment.',
  },
  {
    icon: '/assets/icons/home/ic_design.svg',
    title: 'How do I get started with enableD?',
    description:
      'Getting started with enableD is easy - simply sign up and start using the app to request and manage disability accommodations. Our support team is available to answer any questions you may have, and to provide assistance with implementing the app in your workplace.',
  },
];

export default function FAQ() {
  return (
    <>
      <Typography variant="h3" id="faq" sx={{ paddingLeft: 3 }}>
        Frequently Asked Questions
      </Typography>

      {FAQS.map((faq, index) => (
        <>
          <Container sx={{ padding: 2 }}>
            <Stack spacing={{ xs: 1, sm: 2 }} useFlexGap>
              <Typography variant="h5">{faq.title}</Typography>
              <Typography variant="body1" sx={{ color: 'text.primary' }}>
                {faq.description}
              </Typography>
            </Stack>
          </Container>
          <Divider />
        </>
      ))}
    </>
  );
}
