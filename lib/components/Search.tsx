import { PhoneInputContext } from "lib/context/PhoneInputContext";
import _ from "lodash";
import { useContext, useEffect, useState } from "react";

const Search = () => {
  const { setfilteredCountries, countries } = useContext(PhoneInputContext);
  const [inputValue, setinputValue] = useState("");

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setfilteredCountries(filteredCountries);
    }, 100);
    return () => {
      clearTimeout(searchTimeout);
    };
  }, [inputValue]);

  return (
    <div className="sticky top-0 left-0 right-0 bg-white">
      <input
        className="w-full"
        type="text"
        onChange={(e) => setinputValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
