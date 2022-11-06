import { PhoneInputContext } from "lib/context/PhoneInputContext";
import React, { useContext } from "react";
import CountryItem from "./CountryItem";

const Countries = () => {
  const { countries, filteredCountries, searchValue, noCountiesFoundText } =
    useContext(PhoneInputContext);
  const internalCountries =
    searchValue.length > 0
      ? filteredCountries.length > 0
        ? filteredCountries
        : null
      : countries;
  console.log(filteredCountries);
  return (
    <>
      {internalCountries ? (
        internalCountries.map((country) => {
          return country.dialCode.suffixes?.map((suffix: string, index) => {
            return (
              <CountryItem key={index} country={country} suffix={suffix} />
            );
          });
        })
      ) : (
        <div className="text-center">
          {noCountiesFoundText ? noCountiesFoundText : "No Countries Found"}
        </div>
      )}
    </>
  );
};

export default Countries;
