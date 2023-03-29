import React, { useContext } from 'react';

import { Country } from '../../../types';
import { MobileNumberContext } from '../MobileNumber';

interface DropdownItemProps {
  country: Country;
  dialCode: string;
}

const DropdownItem = ({ country, dialCode }: DropdownItemProps) => {
  const { setSelectedCountry, setisOpen } = useContext(MobileNumberContext);
  const handleSelect = () => {
    setSelectedCountry && setSelectedCountry(dialCode);
    setisOpen(false);
  };
  return (
    <button
      onClick={handleSelect}
      className="grid grid-cols-10 grid-flow-col gap-x-2 items-center border-t border-b-gray-200 px-2 line-clamp-1"
    >
      <div className="flex flex-col items-center py-1 col-span-2">
        <img
          src={country.flags.png}
          className="w-5 h-5 object-fill rounded-full"
        />
        <span className="text-gray-500 text-xs">{dialCode}</span>
      </div>
      <div className="flex items-center justify-start text-sm rtl:pr-2 ltr:pl-2 col-span-8">
        {country.name.common}
      </div>
    </button>
  );
};

export default DropdownItem;
