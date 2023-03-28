import { Country } from './Country';

export interface MobileNumberContextProps {
  countries: Country[] | null;
  phoneNumber: string;
  setPhoneNumber?: (phoneNumber: string) => void;
  selectedCountry: Country | null;
  setSelectedCountry?: (dialCode: string) => void;
}
