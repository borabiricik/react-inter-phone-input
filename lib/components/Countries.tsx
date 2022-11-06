import { PhoneInputContext } from "lib/context/PhoneInputContext";
import React, { useContext } from "react";
import CountryItem from "./CountryItem";

const Countries = () => {
  const { countries } = useContext(PhoneInputContext);
  return (
    <>
      {countries.map((country) => {
        return country.dialCode.suffixes?.map((suffix: string, index) => {
          return <CountryItem key={index} country={country} suffix={suffix} />;
        });
      })}
    </>
  );
};

export default Countries;
