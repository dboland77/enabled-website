import { paramCase } from 'src/utils/change-case';

const MOCK_ID = 12345;

const MOCK_TITLE = 'test title';

export const paths = {
  pricing: '/pricing',
  features: '/',
  contact: '/contact',
  faq: '/faq',
  page404: '/error/404',
  demo: '/demo',
  cookies: '/cookies-policy',
  privacypolicy: '/privacy-policy',
  post: {
    root: `/post`,
    details: (title: string) => `/post/${paramCase(title)}`,
    demo: {
      details: `/post/${paramCase(MOCK_TITLE)}`,
    },
  },
};
