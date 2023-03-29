import classNames from 'classnames';
import React, { ChangeEvent, useContext } from 'react';
import MaskedInput from 'react-text-mask';

import { InputProps } from '../../../types/MobileNumber';
import { MobileNumberContext } from '../MobileNumber';

const Input = ({
  className = '',
  onChange,
  mask,
  ...restInputProps
}: InputProps) => {
  const { setPhoneNumber, phoneNumber, append } =
    useContext(MobileNumberContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    const unmask = e.target.value.replace(/[^\d]/g, '');
    setPhoneNumber && setPhoneNumber(unmask);
  };

  // TODO: Will add input mask here
  return (
    <div className="flex-1 flex">
      <MaskedInput
        mask={[
          /[1-9]/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
        guide={false}
        value={phoneNumber}
        onChange={handleChange}
        className={classNames(
          'flex-1 outline-none px-2 ltr:rounded-r-md rtl:rounded-l-md text-sm',
          className,
        )}
        keepCharPositions
        {...restInputProps}
      />
      {append}
    </div>
  );
};

export default Input;
