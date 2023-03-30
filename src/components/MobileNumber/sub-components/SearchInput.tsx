import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import { MobileNumberContext } from '../MobileNumber';

const Input = styled.input`
  outline: none;
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.25rem 0.5rem;
  border: none;
`;

const SearchInput = () => {
  const [searchInput, setsearchInput] = useState('');
  const { setsearchCountries, countries } = useContext(MobileNumberContext);

  useEffect(() => {
    if (searchInput.length > 0 && countries) {
      const foundCountries = [...countries].filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setsearchCountries(foundCountries);
    } else setsearchCountries(null);
  }, [searchInput, setsearchCountries]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setsearchInput(e.target.value);
  };
  return (
    <Input
      className="outline-none border rounded-lg w-full text-sm py-1 px-2"
      type="text"
      value={searchInput}
      onChange={handleChange}
      maxLength={100}
      placeholder={'Search...'}
    />
  );
};

export default SearchInput;
