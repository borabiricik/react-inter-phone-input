import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import { PhoneInputContext } from "./context/PhoneInputContext";
import "./styles/global.css";
import { ICountry, IPhoneInputProps, ISelectedCountry } from "./types/main";

const PhoneInput = ({ ...props }: IPhoneInputProps) => {
  const [internalCounties, setinternalCounties] = useState<ICountry[]>(
    props.countries ? props.countries : []
  );
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const [selectedCountry, setselectedCountry] =
    useState<ISelectedCountry | null>(null);
  const [phoneNumber, setphoneNumber] = useState("");
  const { countries, onCountryChange } = props;
  useEffect(() => {
    if (!countries) {
      axios
        .get("https://restcountries.com/v3.1/all?fields=name,cca2,flags,idd")
        .then((res) => {
          const formattedCountries = res.data.map((country: any) => {
            return {
              name: country.name.common,
              flag: country.flags.svg,
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
      <div className="rounded-[6px] flex items-stretch">
        <Dropdown />
        <Input />
      </div>
    </PhoneInputContext.Provider>
  );
};

export default PhoneInput;
