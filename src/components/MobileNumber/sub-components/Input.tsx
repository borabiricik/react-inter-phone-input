import classNames from 'classnames';
import React, { ChangeEvent, useContext } from 'react';

import { InputProps } from '../../../types/MobileNumber';
import { MobileNumberContext } from '../MobileNumber';

const Input = ({ className = '', onChange, ...restInputProps }: InputProps) => {
  const { setPhoneNumber, phoneNumber, append } =
    useContext(MobileNumberContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    setPhoneNumber && setPhoneNumber(e.target.value);
  };

  // TODO: Will add input mask here
  return (
    <div className="flex-1 flex">
      <input
        value={phoneNumber}
        onChange={handleChange}
        className={classNames(
          'flex-1 outline-none px-2 ltr:rounded-r-md rtl:rounded-l-md text-sm',
          className,
        )}
        type={'number'}
        {...restInputProps}
      />
      {append}
    </div>
  );
};

export default Input;
