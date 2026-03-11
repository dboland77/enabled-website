import { Metadata } from 'next';

import { BlogView } from 'src/sections/blog/view';

export const metadata: Metadata = {
  title: 'Blog | enableD - Disability Discrimination Resources',
  description:
    'Expert insights on disability discrimination, employment law, the Equality Act 2010, and creating inclusive workplaces. Stay informed about your rights.',
  keywords:
    'disability discrimination, Equality Act 2010, employment law, reasonable adjustments, workplace inclusion, ECHR, disability rights',
};

export default function BlogPage() {
  return <BlogView />;
}
