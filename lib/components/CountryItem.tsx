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
    dropdownItemProps = {},
  } = useContext(PhoneInputContext);

  const { className: flagClassName = "", src, ...restFlagProps } = flagProps;
  const { className: dropdownItemsClassName = "", ...restDropdownItemProps } =
    dropdownItemProps;
  return (
    <div
      className={classNames(
        "flex items-center space-x-2 rtl:space-x-reverse cursor-pointer",
        dropdownItemsClassName
      )}
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
        className={classNames("w-4 h-4 object-fill", flagClassName)}
        {...restFlagProps}
      />
      <span>{country.name}</span>
      <span>{`${country.dialCode.root}${suffix}`}</span>
    </div>
  );
};

export default CountryItem;
