export interface IPhoneInputProps {
    countries?: ICountry[]
}

export interface IPhoneInputContextProps {
    countries: ICountry[]
}

export interface ICountry {
    name: string
    dialCode: string
    flag: string
}