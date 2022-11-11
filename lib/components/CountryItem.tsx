import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { ICountryItemProps } from "lib/types/Dropdown";
import { classNames } from "lib/utils/classNames";
import { useContext } from "react";
import styled from "styled-components";

const CountryItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const CountryFlag = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: fill;
`;

const CountryItem = ({ country, suffix }: ICountryItemProps) => {
  const {
    setselectedCountry,
    setisDropdownOpen,
    onChange,
    phoneNumber,
    flagProps = {},
    dropdownItemProps = {},
  } = useContext(PhoneInputContext);

  const {
    className: flagClassName = "",
    src,
    ref,
    ...restFlagProps
  } = flagProps;
  const { className: dropdownItemsClassName = "", ...restDropdownItemProps } =
    dropdownItemProps;
  return (
    <CountryItemContainer
      className={classNames(dropdownItemsClassName)}
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
      <CountryFlag
        src={country.flag}
        alt="Selected Country Flag"
        className={classNames(flagClassName)}
        {...restFlagProps}
      />
      <span>{country.name}</span>
      <span>{`${country.dialCode.root}${suffix}`}</span>
    </CountryItemContainer>
  );
};

export default CountryItem;
