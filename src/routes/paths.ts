import { paramCase } from 'src/utils/change-case';

const MOCK_ID = 12345;

const MOCK_TITLE = 'test title';

export const paths = {
  pricing: '/pricing',
  about: '/about',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/error/404',
  product: '/product',
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
