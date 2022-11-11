import axios from "axios";
import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import { PhoneInputContext } from "./context/PhoneInputContext";
import { ICountry, IPhoneInputProps, ISelectedCountry } from "./types/main";
import { classNames } from "./utils/classNames";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

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
  const [filteredCountries, setfilteredCountries] = useState<ICountry[]>([]);
  const [isDropdownOpen, setisDropdownOpen] = useState(false);

  const [selectedCountry, setselectedCountry] =
    useState<ISelectedCountry | null>(null);
  const [phoneNumber, setphoneNumber] = useState("");
  const [inputValue, setinputValue] = useState("");

  const {
    className: containerClassName = "",
    ref,
    ...restContainerProps
  } = containerProps;

  useEffect(() => {
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
        filteredCountries,
        setfilteredCountries,
        searchValue: inputValue,
        setsearchValue: setinputValue,
      }}
    >
      <Container
        {...restContainerProps}
        className={classNames(containerClassName)}
      >
        <Dropdown />
        <Input />
        {append && append}
      </Container>
    </PhoneInputContext.Provider>
  );
};

export default PhoneInput;
