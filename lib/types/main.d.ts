import { DetailedHTMLProps, HTMLAttributes } from "react"

export interface IPhoneInputProps {
    countries?: ICountry[]
    onChange?: (country: ISelectedCountry | null, phoneNumber: string) => void
    onCountryChange?: (country: ISelectedCountry) => void
    onInputChange?: (phoneNumber: string) => void
    containerProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
    dropdownButtonProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

export interface IPhoneInputContextProps extends IPhoneInputProps {
    countries: ICountry[]
    selectedCountry: ISelectedCountry | null
    setselectedCountry: Function
    isDropdownOpen: boolean
    setisDropdownOpen: Function
    phoneNumber: string
    setphoneNumber: Function
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