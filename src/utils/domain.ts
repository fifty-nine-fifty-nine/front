export const domainExtractor = (url: string, point: string) => {
  const splitedDomain = url.split(point);
  const domain = splitedDomain[0];

  return domain;
};
