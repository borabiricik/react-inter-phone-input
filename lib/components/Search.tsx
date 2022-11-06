import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { classNames } from "lib/utils/classNames";
import _ from "lodash";
import { useContext, useEffect, useState } from "react";

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
    ...restSearchInputProps
  } = searchInputProps;

  return (
    <div className="sticky top-0 left-0 right-0 bg-white">
      <input
        className={classNames("w-full px-2 outline-none", className)}
        type="text"
        onChange={(e) => {
          onChange && onChange(e);
          setsearchValue(e.target.value);
        }}
        placeholder={placeholder ? placeholder : "Search..."}
        {...restSearchInputProps}
      />
    </div>
  );
};

export default Search;
