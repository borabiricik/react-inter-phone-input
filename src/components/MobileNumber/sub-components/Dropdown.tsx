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
        'min-w-[90px] px-3 py-2 bg-childOfLight flex items-center gap-x-[10px] ltr:rounded-l-md rtl:rounded-r-md ltr:border-r rtl:border-l border-fadingSunset',
        className,
      )}
      onClick={handleClick}
      type="button"
      {...restProps}
    >
      <div className="flex items-center">
        <span>img</span>
        <span className="text-leadBlack text-xs">+965</span>
      </div>
      <ChevronUpSVG
        className={classNames(
          'w-3 h-3 fill-bluntGray transition-all',
          isOpen ? 'rotate-0' : 'rotate-180',
        )}
      />
    </button>
  );
};

export default Dropdown;
