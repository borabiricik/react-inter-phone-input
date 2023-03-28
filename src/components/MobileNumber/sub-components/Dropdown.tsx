import classNames from 'classnames';
import React, { MouseEvent, useContext, useState } from 'react';

import ChevronUpSVG from '../../../assets/images/ChevronUpSVG';
import { findInCountries } from '../../../lib/utils';
import { DropdownProps } from '../../../types/MobileNumber';
import { MobileNumberContext } from '../MobileNumber';

const Dropdown = (props: DropdownProps) => {
  const [isOpen, setisOpen] = useState(false);
  const { className = '', onClick, ...restProps } = props;

  const { countries, selectedCountry } = useContext(MobileNumberContext);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    setisOpen((prev) => !prev);
  };

  const foundCountry = findInCountries(countries, selectedCountry);

  return (
    <button
      className={classNames(
        'min-w-[90px] px-3 py-2 bg-childOfLight flex items-center gap-x-[10px] ltr:rounded-l-md rtl:rounded-r-md ltr:border-r rtl:border-l border-fadingSunset',
        className,
      )}
      onClick={handleClick}
      type="button"
      {...restProps}
    >
      {foundCountry ? (
        <>
          <div className="flex items-center gap-x-[3px]">
            <img
              src={foundCountry.flags.png}
              className="w-4 h-4 object-fill rounded-full"
            />
            <span className="text-leadBlack text-xs">{selectedCountry}</span>
          </div>
          <ChevronUpSVG
            className={classNames(
              'w-3 h-3 fill-bluntGray transition-all',
              isOpen ? 'rotate-0' : 'rotate-180',
            )}
          />
        </>
      ) : (
        'Country not found'
      )}
    </button>
  );
};

export default Dropdown;
