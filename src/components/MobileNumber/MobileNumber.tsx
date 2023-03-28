import { AxiosResponse } from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react';

import { instance } from '../../lib/axios';
import { compare } from '../../lib/utils';
import { Country } from '../../types/Country';

export interface MobileNumberProps {}

export interface MobileNumberContextProps {
  countries: Country[] | null;
}

const MobileNumberContext = createContext<MobileNumberContextProps>({
  countries: null,
});

export const MobileNumber: React.FC<MobileNumberProps> = () => {
  const [countries, setcountries] = useState<Country[] | null>([]);
  const getCountries = useCallback(async () => {
    const response: AxiosResponse<Country[]> = await instance.get('/all', {
      params: {
        fields: 'name,flags,idd',
      },
    });
    setcountries(response.data.sort(compare));
  }, []);

  console.log(countries);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

  return (
    <MobileNumberContext.Provider
      value={{ countries: countries ? [...countries] : null }}
    >
      <div>asd</div>
    </MobileNumberContext.Provider>
  );
};
