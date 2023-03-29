import React, { ChangeEvent, useContext, useEffect, useState } from 'react';

import { MobileNumberContext } from '../MobileNumber';

const SearchInput = () => {
  const [searchInput, setsearchInput] = useState('');
  const { setsearchCountries, countries } = useContext(MobileNumberContext);

  useEffect(() => {
    if (searchInput.length > 0 && countries) {
      const foundCountries = [...countries].filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase()),
      );
      console.log(foundCountries);
      setsearchCountries(foundCountries);
    } else setsearchCountries(null);
  }, [searchInput, setsearchCountries]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setsearchInput(e.target.value);
  };
  return (
    <input
      className="outline-none border rounded-lg w-full text-sm py-1 px-2"
      type="text"
      value={searchInput}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
