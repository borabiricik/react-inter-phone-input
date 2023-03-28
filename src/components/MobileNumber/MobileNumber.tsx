import { AxiosResponse } from 'axios';
import classNames from 'classnames';
import React, { createContext, useCallback, useEffect, useState } from 'react';

import { instance } from '../../lib/axios';
import { compare } from '../../lib/utils';
import { MobileNumberContextProps } from '../../types/Context';
import { Country } from '../../types/Country';
import { MobileNumberProps } from '../../types/MobileNumber';
import Dropdown from './sub-components/Dropdown';
import Input from './sub-components/Input';

const initialValues: MobileNumberContextProps = {
  countries: null,
  phoneNumber: '',
  selectedCountry: null,
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
}) => {
  const [countries, setcountries] = useState<Country[] | null>([]);
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

  const findInCountries = (dialCode: string | null) => {
    if (countries && dialCode) {
      const foundCountry = countries.find((country) =>
        country.dialCodes.find(
          (countryDialCode) => countryDialCode === dialCode,
        ),
      );
      return foundCountry ? foundCountry : null;
    }
    return null;
  };

  return (
    <MobileNumberContext.Provider
      value={{
        countries: countries ? [...countries] : null,
        selectedCountry: findInCountries(
          value.dialCode ? value.dialCode : null,
        ),
        setSelectedCountry(dialCode) {
          onCountryChange(dialCode);
        },
        phoneNumber: value.phoneNumber ? value.phoneNumber : '',
        setPhoneNumber(phoneNumber) {
          onPhoneNumberChange(phoneNumber);
        },
      }}
    >
      <div
        dir={direction}
        className={classNames(
          'flex items-stretch border border-fadingSunset rounded-md',
          className,
        )}
        {...restContainerProps}
      >
        <Dropdown {...dropdownProps} />
        <Input {...inputProps} />
      </div>
    </MobileNumberContext.Provider>
  );
};
