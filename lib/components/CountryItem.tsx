import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { ICountryItemProps } from "lib/types/Dropdown";
import { classNames } from "lib/utils/classNames";
import { useContext } from "react";

const CountryItem = ({ country, suffix }: ICountryItemProps) => {
  const {
    setselectedCountry,
    setisDropdownOpen,
    onChange,
    phoneNumber,
    flagProps = {},
  } = useContext(PhoneInputContext);

  const { className: flagClassName = "", src, ...restFlagProps } = flagProps;
  return (
    <div
      className="flex items-center space-x-2 rtl:space-x-reverse cursor-pointer"
      onClick={() => {
        setselectedCountry({
          ...country,
          dialCode: `${country.dialCode.root}${suffix}`,
        });
        onChange &&
          onChange(
            {
              ...country,
              dialCode: `${country.dialCode.root}${suffix}`,
            },
            phoneNumber
          );
        setisDropdownOpen(false);
      }}
    >
      <img
        src={country.flag}
        alt="Selected Country Flag"
        className={classNames("w-4 h-4 object-cover", flagClassName)}
        {...restFlagProps}
      />
      <span>{country.name}</span>
      <span>{`${country.dialCode.root}${suffix}`}</span>
    </div>
  );
};

export default CountryItem;
