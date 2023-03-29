import { HTMLAttributes, InputHTMLAttributes } from 'react';
declare type ContainerProps = HTMLAttributes<HTMLDivElement>;
export declare type DropdownProps = HTMLAttributes<HTMLButtonElement>;
export declare type InputProps = InputHTMLAttributes<HTMLInputElement>;
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
}
export {};
