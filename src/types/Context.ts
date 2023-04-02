import { Dispatch, ReactElement, SetStateAction } from 'react';

import { Country } from './Country';
import {
  DropdownMenuListItemProps,
  DropdownMenuListProps,
  DropdownMenuProps,
} from './MobileNumber';

export interface MobileNumberContextProps {
  countries: Country[] | null;
  phoneNumber: string;
  setPhoneNumber?: (phoneNumber: string) => void;
  selectedCountry: string | null;
  setSelectedCountry?: (dialCode: string) => void;
  isOpen: boolean;
  setisOpen: Dispatch<SetStateAction<boolean>>;
  append?: ReactElement;
  enableSuffixes?: boolean;
  searchCountries: Country[] | null;
  setsearchCountries: Dispatch<SetStateAction<Country[] | null>>;
  dropdownMenuProps?: DropdownMenuProps;
  dropdownMenuListProps?: DropdownMenuListProps;
  dropdownMenuListItemProps?: DropdownMenuListItemProps;
}
