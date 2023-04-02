import { AxiosResponse } from 'axios';
import classNames from 'classnames';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme } from '../../assets/theme';
import { instance } from '../../lib/axios';
import { compare } from '../../lib/utils';
import { MobileNumberContextProps } from '../../types/Context';
import { Country } from '../../types/Country';
import { MobileNumberProps } from '../../types/MobileNumber';
import Dropdown from './sub-components/Dropdown';
import Input from './sub-components/Input';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  border: 1px solid #b5b5c3;
  border-radius: 6px;
  font-size: 0.875rem;
`;

const initialValues: MobileNumberContextProps = {
  countries: null,
  phoneNumber: '',
  selectedCountry: null,
  setisOpen: () => null,
  isOpen: false,
  enableSuffixes: false,
  searchCountries: null,
  setsearchCountries: () => null,
};

export const MobileNumberContext =
  createContext<MobileNumberContextProps>(initialValues);

export const MobileNumber: React.FC<MobileNumberProps> = ({
  direction = 'ltr',
  containerProps = {},
  dropdownProps = {},
  inputProps = {},
  value,
  onCountryChange,
  onPhoneNumberChange,
  append,
  enableSuffixes = false,
  dropdownMenuListItemProps = {},
  dropdownMenuListProps = {},
  dropdownMenuProps = {},
  ...rest
}) => {
  const [countries, setcountries] = useState<Country[] | null>([]);
  const [isOpen, setisOpen] = useState(false);
  const [searchCountries, setsearchCountries] = useState<Country[] | null>(
    countries ? [...countries] : null,
  );
  const getCountries = useCallback(async () => {
    const response: AxiosResponse<Country[]> = await instance.get('/all', {
      params: {
        fields: 'name,flags,idd',
      },
    });
    setcountries(
      response.data
        .map((country) => {
          return {
            ...country,
            dialCodes: country.idd.suffixes.map(
              (suffix) => `${country.idd.root}${suffix}`,
            ),
          };
        })
        .sort(compare),
    );
  }, []);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  const { className = '', ...restContainerProps } = containerProps;

  return (
    <MobileNumberContext.Provider
      value={{
        countries: countries ? [...countries] : null,
        selectedCountry: value.dialCode ? value.dialCode : null,
        setSelectedCountry(dialCode) {
          onCountryChange(dialCode);
        },
        phoneNumber: value.phoneNumber ? value.phoneNumber : '',
        setPhoneNumber(phoneNumber) {
          onPhoneNumberChange(phoneNumber);
        },
        setisOpen,
        isOpen,
        append,
        enableSuffixes,
        searchCountries,
        setsearchCountries,
        dropdownMenuListItemProps,
        dropdownMenuListProps,
        dropdownMenuProps,
        ...rest,
      }}
    >
      <ThemeProvider theme={{ ...theme, direction }}>
        <Container
          dir={direction}
          className={classNames(className)}
          {...restContainerProps}
        >
          <Dropdown {...dropdownProps} />
          <Input {...inputProps} />
        </Container>
      </ThemeProvider>
    </MobileNumberContext.Provider>
  );
};
