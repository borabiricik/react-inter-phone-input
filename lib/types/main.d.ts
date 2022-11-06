export interface IPhoneInputProps {
    countries?: ICountry[]
}

export interface IPhoneInputContextProps {
    countries: ICountry[]
    selectedCountry: ICountry | null
    setselectedCountry: Function
    isDropdownOpen: boolean
    setisDropdownOpen: Function
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