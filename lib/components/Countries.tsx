import { PhoneInputContext } from "lib/context/PhoneInputContext";
import React, { useContext } from "react";
import CountryItem from "./CountryItem";

const Countries = () => {
  const { countries, filteredCountries } = useContext(PhoneInputContext);
  const internalCounties =
    filteredCountries.length > 0 ? filteredCountries : countries;
  return (
    <>
      {internalCounties.map((country) => {
        return country.dialCode.suffixes?.map((suffix: string, index) => {
          return <CountryItem key={index} country={country} suffix={suffix} />;
        });
      })}
    </>
  );
};

export default Countries;
