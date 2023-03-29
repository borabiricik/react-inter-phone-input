import React, { useContext } from 'react';

import Glass from '../../common/Glass';
import { MobileNumberContext } from '../MobileNumber';
import DropdownItem from './DropdownItem';

const DropdownMenu = () => {
  const { countries, enableSuffixes } = useContext(MobileNumberContext);

  if (countries) {
    return (
      <Glass className="max-h-[300px] overflow-y-scroll  max-w-[350px]">
        <div className="sticky top-1 mx-1  bg-red-200">
          search will come here
        </div>
        <div className="flex flex-col overflow-y-scroll scrollbar-hide pt-2">
          {countries.map((country, index) => {
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
        </div>
      </Glass>
    );
  }
  return null;
};

export default DropdownMenu;
