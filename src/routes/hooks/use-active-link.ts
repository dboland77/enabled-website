'use client';

import { usePathname } from 'next/navigation';

type ReturnType = boolean;

export const useActiveLink = (path: string): ReturnType => {
  const currentPath = usePathname();

  if (path === '/') path = '';

  const active = currentPath === path + '/';

  return active;
};
