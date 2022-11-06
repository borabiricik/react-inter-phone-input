import { ICountryItemProps } from "lib/types/Dropdown";

const CountryItem = ({ country, suffix }: ICountryItemProps) => {
  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <img src={country.flag} className="w-5 h-5" alt="" />
      <span>{country.name}</span>
      <span>{`${country.dialCode.root}${suffix}`}</span>
    </div>
  );
};

export default CountryItem;
