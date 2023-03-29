import { HTMLAttributes, InputHTMLAttributes, ReactElement } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export type DropdownProps = HTMLAttributes<HTMLButtonElement>;

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export interface MobileNumberProps {
  containerProps?: ContainerProps;
  dropdownProps?: DropdownProps;
  inputProps?: InputProps;
  direction?: 'rtl' | 'ltr';
  onCountryChange: (dialCode: string) => void;
  onPhoneNumberChange: (phoneNumber: string) => void;
  value: {
    phoneNumber: string;
    dialCode: string;
  };
  append?: ReactElement;
}
