import React, { useContext } from 'react';
import styled from 'styled-components';

import Glass from '../../common/Glass';
import { MobileNumberContext } from '../MobileNumber';
import DropdownItem from './DropdownItem';
import SearchInput from './SearchInput';

const GlassDiv = styled(Glass)`
  max-height: 300px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 350px;
`;

const SearchInputContainer = styled.div`
  position: sticky;
  top: 0.25rem;
  left: 0.25rem;
  right: 0.25rem;
`;

const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-top: 0.5rem;
`;

const DropdownMenu = () => {
  const { countries, enableSuffixes, searchCountries } =
    useContext(MobileNumberContext);

  if (countries) {
    const countryArray = searchCountries ? searchCountries : countries;
    return (
      <GlassDiv>
        <SearchInputContainer>
          <SearchInput />
        </SearchInputContainer>
        <CountriesContainer>
          {countryArray.map((country, index) => {
            if (enableSuffixes && country.dialCodes.length > 1) {
              return country.dialCodes.map((dialCode, index) => (
                <DropdownItem
                  key={index}
                  country={country}
                  dialCode={dialCode}
                />
              ));
            } else
              return (
                <DropdownItem
                  key={index}
                  country={country}
                  dialCode={country.dialCodes[0]}
                />
              );
          })}
        </CountriesContainer>
      </GlassDiv>
    );
  }
  return null;
};

export default DropdownMenu;
