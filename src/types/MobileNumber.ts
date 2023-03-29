import { HTMLAttributes, ReactElement } from 'react';
import { MaskedInputProps } from 'react-text-mask';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export type DropdownProps = HTMLAttributes<HTMLButtonElement>;

export type InputProps = MaskedInputProps;

export interface MobileNumberProps {
  containerProps?: ContainerProps;
  dropdownProps?: DropdownProps;
  inputProps?: MaskedInputProps;
  direction?: 'rtl' | 'ltr';
  onCountryChange: (dialCode: string) => void;
  onPhoneNumberChange: (phoneNumber: string) => void;
  value: {
    phoneNumber: string;
    dialCode: string;
  };
  append?: ReactElement;
  enableSuffixes?: boolean;
}
