import axios from "axios";
import _ from "lodash";
import { useEffect, useMemo, useRef, useState } from "react";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import { PhoneInputContext } from "./context/PhoneInputContext";
import { useOutsideClick } from "./hooks/useOutsideClick";
import "./styles/global.css";
import { ICountry, IPhoneInputProps, ISelectedCountry } from "./types/main";
import { classNames } from "./utils/classNames";

const PhoneInput = ({ ...props }: IPhoneInputProps) => {
  const {
    countries,
    onCountryChange,
    containerProps = {},
    defaultCountryCode,
    append,
  } = props;
  const [internalCounties, setinternalCounties] = useState<ICountry[]>(
    props.countries ? props.countries : []
  );
  const [isDropdownOpen, setisDropdownOpen] = useState(false);

  const [selectedCountry, setselectedCountry] =
    useState<ISelectedCountry | null>(null);
  const [phoneNumber, setphoneNumber] = useState("");

  const { className: containerClassName = "", ...restContainerProps } =
    containerProps;

  const containerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, () => setisDropdownOpen(false));
  useMemo(() => {
    if (!countries) {
      axios
        .get("https://restcountries.com/v3.1/all?fields=name,cca2,flags,idd")
        .then((res) => {
          const formattedCountries = res.data.map((country: any) => {
            return {
              name: country.name.common,
              flag: country.flags.png,
              code: country.cca2,
              dialCode: {
                ...country.idd,
              },
            };
          });
          const orderedCountries = _.orderBy(
            formattedCountries,
            ["name"],
            ["asc"]
          );
          setinternalCounties(orderedCountries);
        });
    }
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      onCountryChange &&
        onCountryChange({
          ...selectedCountry,
          dialCode: `${selectedCountry.dialCode}`,
        });
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (defaultCountryCode) {
      const foundCountry = internalCounties.find(
        (country) => country.code.toLowerCase() === defaultCountryCode
      );
      if (foundCountry) {
        setselectedCountry({
          ...foundCountry,
          dialCode: `${foundCountry?.dialCode.root}${foundCountry.dialCode.suffixes[0]}`,
        });
      }
    }
  }, [defaultCountryCode, internalCounties]);

  return (
    <PhoneInputContext.Provider
      value={{
        ...props,
        countries: internalCounties,
        selectedCountry,
        setselectedCountry,
        isDropdownOpen,
        setisDropdownOpen,
        phoneNumber,
        setphoneNumber,
      }}
    >
      <div
        {...restContainerProps}
        ref={containerRef}
        className={classNames("flex items-stretch", containerClassName)}
      >
        <Dropdown />
        <Input />
        {append && append}
      </div>
    </PhoneInputContext.Provider>
  );
};

export default PhoneInput;
