import { HTMLAttributes, ReactElement } from 'react';
import { MaskedInputProps } from 'react-text-mask';
declare type ContainerProps = HTMLAttributes<HTMLDivElement>;
export declare type DropdownProps = HTMLAttributes<HTMLButtonElement>;
export declare type InputProps = Omit<MaskedInputProps, 'mask'>;
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
    enableSuffixes?: boolean;
}
export {};
