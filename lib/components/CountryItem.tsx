import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { ICountryItemProps } from "lib/types/Dropdown";
import { useContext } from "react";

const CountryItem = ({ country, suffix }: ICountryItemProps) => {
  const { setselectedCountry, setisDropdownOpen } =
    useContext(PhoneInputContext);
  return (
    <div
      className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer"
      onClick={() => {
        setselectedCountry({
          ...country,
          dialCode: `${country.dialCode.root}${suffix}`,
        });
        setisDropdownOpen(false);
      }}
    >
      <img src={country.flag} className="w-5 h-5" alt="" />
      <span>{country.name}</span>
      <span>{`${country.dialCode.root}${suffix}`}</span>
    </div>
  );
};

export default CountryItem;
