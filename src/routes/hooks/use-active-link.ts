type ReturnType = boolean;

export const useActiveLink = (pathname: string, hashname: string, path: string): ReturnType => {
  const currentPath = path === '/' ? '/' : `${path}/`;

  const active = true;

  console.log(hashname, path);
  return active;
};
