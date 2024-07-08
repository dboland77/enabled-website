import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },
  {
    title: 'About',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.about,
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'About us', path: paths.about },
          { title: 'Contact us', path: paths.contact },
          { title: 'FAQs', path: paths.faqs },
          { title: 'Pricing', path: paths.pricing },
        ],
      },
    ],
  },
  {
    title: 'Product Demo',
    icon: <Iconify icon="solar:notebook-bold-duotone" />,
    path: paths.product,
  },
];
