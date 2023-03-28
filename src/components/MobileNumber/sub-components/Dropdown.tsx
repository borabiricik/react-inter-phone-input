import classNames from 'classnames';
import React, { MouseEvent, useState } from 'react';

import ChevronUpSVG from '../../../assets/images/ChevronUpSVG';
import { DropdownProps } from '../../../types/MobileNumber';

const Dropdown = (props: DropdownProps) => {
  const [isOpen, setisOpen] = useState(false);
  const { className = '', onClick, ...restProps } = props;
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    setisOpen((prev) => !prev);
  };
  return (
    <button
      className={classNames(
        'min-w-[90px] px-3 py-2 bg-childOfLight flex items-center space-x-[10px] rtl:space-x-reverse ltr:rounded-l-md rtl:rounded-r-md ltr:border-r rtl:border-l border-fadingSunset',
        className,
      )}
      onClick={handleClick}
      type="button"
      {...restProps}
    >
      <span>Dropdown</span>
      <ChevronUpSVG
        className={classNames(
          'w-3 h-3 fill-black transition-all',
          isOpen ? 'rotate-0' : 'rotate-180',
        )}
      />
    </button>
  );
};

export default Dropdown;
