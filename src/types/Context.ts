import { Dispatch, SetStateAction } from 'react';

import { Country } from './Country';

export interface MobileNumberContextProps {
  countries: Country[] | null;
  phoneNumber: string;
  setPhoneNumber?: (phoneNumber: string) => void;
  selectedCountry: string | null;
  setSelectedCountry?: (dialCode: string) => void;
  isOpen: boolean;
  setisOpen: Dispatch<SetStateAction<boolean>>;
}
