import { Country } from '../types/Country';

export const compare = (a: Country, b: Country) => {
  if (a.name.common < b.name.common) {
    return -1;
  }
  if (a.name.common > b.name.common) {
    return 1;
  }
  return 0;
};
