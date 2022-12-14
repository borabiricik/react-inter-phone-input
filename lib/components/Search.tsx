import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { classNames } from "lib/utils/classNames";
import _ from "lodash";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
`;

const SearchInput = styled.input`
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  outline: none;
  border: none;
`;

const Search = () => {
  const {
    setfilteredCountries,
    countries,
    searchInputProps = {},
    searchValue,
    setsearchValue,
  } = useContext(PhoneInputContext);

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setfilteredCountries(
        filteredCountries.length > 0 ? filteredCountries : []
      );
    }, 100);
    return () => {
      clearTimeout(searchTimeout);
    };
  }, [searchValue]);

  const {
    className = "",
    onChange,
    placeholder,
    ref,
    ...restSearchInputProps
  } = searchInputProps;

  return (
    <SearchContainer>
      <SearchInput
        className={classNames(className)}
        type="text"
        onChange={(e) => {
          onChange && onChange(e);
          setsearchValue(e.target.value);
        }}
        placeholder={placeholder ? placeholder : "Search..."}
        {...restSearchInputProps}
      />
    </SearchContainer>
  );
};

export default Search;
