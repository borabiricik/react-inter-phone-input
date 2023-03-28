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

export const findInCountries = (
  countries: Country[] | null,
  dialCode: string | null,
) => {
  if (countries && dialCode) {
    const foundCountry = countries.find((country) =>
      country.dialCodes.find((countryDialCode) => countryDialCode === dialCode),
    );
    return foundCountry ? foundCountry : null;
  }
  return null;
};
