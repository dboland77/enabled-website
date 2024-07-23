'use client';

import { useLocationHash } from './use-location-hash';
import { useSearchParams } from 'next/navigation';

type ReturnType = boolean;

export const useActiveLink = (path: string): ReturnType => {
  const hash = useLocationHash();

  console.log(hash);

  const active = hash === path;

  return active;
};
