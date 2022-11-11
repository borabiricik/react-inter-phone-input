import { PhoneInputContext } from "lib/context/PhoneInputContext";
import React, { useContext } from "react";
import styled from "styled-components";
import CountryItem from "./CountryItem";

const CountryContainer = styled.div`
  text-align: center;
`;

const Countries = () => {
  const { countries, filteredCountries, searchValue, noCountiesFoundText } =
    useContext(PhoneInputContext);
  const internalCountries =
    searchValue.length > 0
      ? filteredCountries.length > 0
        ? filteredCountries
        : null
      : countries;
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
        <CountryContainer>
          {noCountiesFoundText ? noCountiesFoundText : "No Countries Found"}
        </CountryContainer>
      )}
    </>
  );
};

export default Countries;
