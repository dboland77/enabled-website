import { useLocationHash } from './use-location-hash';

type ReturnType = boolean;

export const useActiveLink = (path: string): ReturnType => {
  const hash = useLocationHash();

  const currentPath = path === '/' ? '/' : `${path}/`;

  const active = true;

  return active;
};
