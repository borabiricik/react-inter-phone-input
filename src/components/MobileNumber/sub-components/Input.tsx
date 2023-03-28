import classNames from 'classnames';
import React, { ChangeEvent, useContext } from 'react';

import { InputProps } from '../../../types/MobileNumber';
import { MobileNumberContext } from '../MobileNumber';

const Input = ({ className = '', onChange, ...restInputProps }: InputProps) => {
  const { setPhoneNumber, phoneNumber } = useContext(MobileNumberContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    setPhoneNumber && setPhoneNumber(e.target.value);
  };

  // TODO: Will add input mask here
  return (
    <input
      value={phoneNumber}
      onChange={handleChange}
      className={classNames('flex-1 outline-none px-2', className)}
      type={'number'}
      {...restInputProps}
    />
  );
};

export default Input;
