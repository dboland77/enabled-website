import { paths } from 'src/routes/paths';

import Iconify from 'src/components/iconify';

export const navConfig = [
  {
    title: 'Features',
    icon: <Iconify icon="solar:widget-5-bold-duotone" />,
    path: paths.features,
  },
  {
    title: 'FAQ',
    icon: <Iconify icon="solar:question-circle-bold-duotone" />,
    path: paths.faq,
  },
  {
    title: 'About',
    icon: <Iconify icon="solar:user-circle-bold-duotone" />,
    path: paths.about,
  },
];
