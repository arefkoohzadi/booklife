export const truncate = (txt, number) => {
  return txt.length > number ? txt.slice(0, number) : txt;
};
