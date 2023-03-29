import { Country } from '../types/Country';
export declare const compare: (a: Country, b: Country) => 1 | -1 | 0;
export declare const findInCountries: (countries: Country[] | null, dialCode: string | null) => Country | null;
