import { DetailedHTMLProps, HTMLAttributes, ImgHTMLAttributes, InputHTMLAttributes, ReactElement } from "react"

export interface IPhoneInputProps {
    countries?: ICountry[]
    onChange?: (country: ISelectedCountry | null, phoneNumber: string) => void
    onCountryChange?: (country: ISelectedCountry) => void
    onInputChange?: (phoneNumber: string) => void
    isCountrySelectEnabled?: boolean
    append?: ReactElement | string
    containerProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    dropdownButtonProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    flagProps?: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
    inputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    defaultCountryCode?: string
    dropdownProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    dropdownItemProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    searchInputProps?: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    isSearchable?: boolean
    noCountiesFoundText?: string
}

export interface IPhoneInputContextProps extends IPhoneInputProps {
    countries: ICountry[]
    selectedCountry: ISelectedCountry | null
    setselectedCountry: Function
    isDropdownOpen: boolean
    setisDropdownOpen: Function
    phoneNumber: string
    setphoneNumber: Function
    filteredCountries: ICountry[]
    setfilteredCountries: Function
    searchValue: string
    setsearchValue: Function
}

export interface ICountry {
    name: string
    code: string
    dialCode: {
        root: string
        suffixes: string[]
    }
    flag: string
}

export interface ISelectedCountry extends Omit<ICountry, 'dialCode'> {
    dialCode: string

}

declare module 'react-inter-phone-input'