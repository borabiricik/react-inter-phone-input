import { HTMLAttributes, ReactElement } from 'react';
import { MaskedInputProps } from 'react-text-mask';
type ContainerProps = HTMLAttributes<HTMLDivElement>;
export type DropdownProps = HTMLAttributes<HTMLButtonElement>;
export type DropdownMenuProps = HTMLAttributes<HTMLDivElement>;
export type DropdownMenuListItemProps = HTMLAttributes<HTMLDivElement>;
export type DropdownMenuListProps = HTMLAttributes<HTMLDivElement>;
export type InputProps = Omit<MaskedInputProps, 'mask'>;
export interface MobileNumberProps {
    containerProps?: ContainerProps;
    dropdownProps?: DropdownProps;
    dropdownMenuProps?: DropdownMenuProps;
    dropdownMenuListProps?: DropdownMenuListProps;
    dropdownMenuListItemProps?: DropdownMenuListItemProps;
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
    disableDropdown?: boolean;
    animatedPlaceholder?: boolean;
}
export {};
