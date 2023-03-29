import React, { useContext } from 'react';

import Glass from '../../common/Glass';
import { MobileNumberContext } from '../MobileNumber';

const DropdownMenu = () => {
  const { countries } = useContext(MobileNumberContext);

  if (countries) {
    return (
      <Glass className="max-h-[300px] overflow-y-scroll scrollbar-hide">
        <div className="sticky top-1 mx-1  bg-red-200">
          search will come here
        </div>
        <div className="flex flex-col overflow-y-scroll scrollbar-hide pt-2">
          {countries.map((country, index) => (
            <div
              className="flex items-center border-b-2 border-b-gray-200"
              key={index}
            >
              <div className="flex flex-col items-center justify-center px-2 py-1">
                <img
                  src={country.flags.png}
                  className="w-5 h-5 object-fill rounded-full"
                />
                <span className="text-gray-500 text-xs">+965</span>
              </div>
              <div className="text-sm px-4">{country.name.common}</div>
            </div>
          ))}
        </div>
      </Glass>
    );
  }
  return null;
};

export default DropdownMenu;
