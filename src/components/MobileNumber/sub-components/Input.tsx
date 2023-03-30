import classNames from 'classnames';
import React, { ChangeEvent, useContext } from 'react';
import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

import { InputProps } from '../../../types/MobileNumber';
import { MobileNumberContext } from '../MobileNumber';

const InputContainer = styled.div`
  display: flex;
  flex: 1;
`;
const TextInput = styled(MaskedInput)`
  flex: 1;
  outline: none;
  padding: 0px 0.5rem;
  border: none;
`;
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
    <InputContainer>
      <TextInput
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
          'ltr:rounded-r-md rtl:rounded-l-md text-sm',
          className,
        )}
        keepCharPositions
        {...restInputProps}
      />
      {append}
    </InputContainer>
  );
};

export default Input;
