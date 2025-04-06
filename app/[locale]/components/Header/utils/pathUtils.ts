export const isMainPage = (pathname: string) => {
  return pathname === "/en" || pathname === "/ka";
};

export const isCobblerPage = (pathname: string) => {
  return pathname === "/en/cobbler" || pathname === "/ka/cobbler";
};

export const isSnacksPage = (pathname: string) => {
  return pathname === "/en/snacks" || pathname === "/ka/snacks";
};

export const isConfectioneryPage = (pathname: string) => {
  return pathname === "/en/confectionery" || pathname === "/ka/confectionery";
};

export const isNewsPage = (pathname: string) => {
  return pathname === "/en/news" || pathname === "/ka/news";
};

export const isAboutUsPage = (pathname: string) => {
  return pathname === "/en/aboutus" || pathname === "/ka/aboutus";
};

export const isCarrierPage = (pathname: string) => {
  return pathname === "/en/vacancies" || pathname === "/ka/vacancies";
};
