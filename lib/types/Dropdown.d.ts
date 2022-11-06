import { ICountry } from "./main";

export interface IDropdownMenuProps {
    setPopperElement: Function;
    styles: any;
    attributes: any;
}

export interface ICountryItemProps {
    country: ICountry;
    suffix?: string;
}
