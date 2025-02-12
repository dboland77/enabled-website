import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

export const navConfig = [
  {
    title: 'FEATURES',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: paths.features,
  },
  {
    title: 'FAQ',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.faq,
  },
  {
    title: 'ABOUT',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.about,
  },
  {
    title: 'GLOSSARY',
    icon: <Iconify icon="solar:atom-bold-duotone" />,
    path: paths.glossary,
  },
];
