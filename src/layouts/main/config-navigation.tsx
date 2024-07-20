import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

export const navConfig = [
  {
    title: 'Features',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: paths.features,
  },
  {
    title: 'FAQ',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.faq,
  },
  // {
  //   title: 'Pricing',
  //   icon: <Iconify icon="solar:atom-bold-duotone" />,
  //   path: paths.pricing,
  // },
  {
    title: 'Contact',
    path: paths.contact,
    icon: <Iconify icon="solar:file-bold-duotone" />,
  },
  // {
  //   title: 'Demo',
  //   icon: <Iconify icon="solar:notebook-bold-duotone" />,
  //   path: paths.demo,
  // },
];
