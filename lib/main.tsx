import React, { createContext, useEffect, useState } from "react";
import Input from "./components/Input";
import "./styles/global.css";
import {
  ICountry,
  IPhoneInputContextProps,
  IPhoneInputProps,
} from "./types/main";
import Dropdown from "./components/Dropdown";
import axios from "axios";
import { PhoneInputContext } from "./context/PhoneInputContext";

const PhoneInput = ({ ...props }: IPhoneInputProps) => {
  const [internalCounties, setinternalCounties] = useState<ICountry[]>(
    props.countries ? props.countries : []
  );
  const { countries } = props;
  useEffect(() => {
    if (!countries) {
      axios.get("https://restcountries.com/v3.1/all").then((res) => {
        setinternalCounties(
          res.data.map((country: any) => {
            return {
              name: country.name.common,
              flag: country.flags.svg,
              dialCode: country.idd.root,
            };
          })
        );
      });
    }
  }, []);

  return (
    <PhoneInputContext.Provider
      value={{ ...props, countries: internalCounties }}
    >
      <div className="rounded-[6px] flex items-stretch">
        <Dropdown />
        <Input />
      </div>
    </PhoneInputContext.Provider>
  );
};

export default PhoneInput;
