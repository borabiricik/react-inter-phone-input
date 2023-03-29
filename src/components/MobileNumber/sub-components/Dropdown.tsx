import classNames from 'classnames';
import React, { MouseEvent, useContext, useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import ChevronUpSVG from '../../../assets/images/ChevronUpSVG';
import { useOnClickOutside } from '../../../hooks/useOutsideClick';
import { findInCountries } from '../../../lib/utils';
import { DropdownProps } from '../../../types/MobileNumber';
import { MobileNumberContext } from '../MobileNumber';
import DropdownMenu from './DropdownMenu';

const Dropdown = (props: DropdownProps) => {
  const { className = '', onClick, ...restProps } = props;

  const { countries, selectedCountry, setisOpen, isOpen } =
    useContext(MobileNumberContext);
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const outsideClickRef = useRef(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    setisOpen((prev) => !prev);
  };

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [{ name: 'offset', options: { offset: [0, 3] } }],
  });

  const foundCountry = findInCountries(countries, selectedCountry);

  useOnClickOutside(outsideClickRef, () => {
    setisOpen(false);
  });

  return (
    <div ref={outsideClickRef}>
      <button
        ref={setReferenceElement}
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
      {isOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <DropdownMenu />
        </div>
      )}
    </div>
  );
};

export default Dropdown;
