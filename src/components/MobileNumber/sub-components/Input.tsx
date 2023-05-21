import classNames from 'classnames';
import { motion } from 'framer-motion';
import React, { ChangeEvent, useContext, useState } from 'react';
import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

import { InputProps } from '../../../types/MobileNumber';
import { MobileNumberContext } from '../MobileNumber';

const InputContainer = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;
const TextInput = styled(MaskedInput)`
  flex: 1;
  outline: none;
  padding: 0px 0.5rem;
  border: none;
`;

const RequiredSpan = styled.span`
  color: red;
`;

const PlaceholderContainer = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

const AnimatedPlaceholder = styled(motion.div)`
  position: absolute;
`;
const Input = ({
  className = '',
  onChange,
  placeholder,
  ...restInputProps
}: InputProps) => {
  const [isFocused, setisFocused] = useState(false);
  const { setPhoneNumber, phoneNumber, append, animatedPlaceholder, required } =
    useContext(MobileNumberContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
    const unmask = e.target.value.replace(/[^\d]/g, '');
    setPhoneNumber && setPhoneNumber(unmask);
  };
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
        onFocus={() => setisFocused(true)}
        onBlur={() => setisFocused(phoneNumber.length !== 0)}
        keepCharPositions
        placeholder={!required && !animatedPlaceholder ? placeholder : ''}
        style={{ paddingTop: animatedPlaceholder ? '8px' : 0 }}
        {...restInputProps}
      />
      {required && phoneNumber.length === 0 && (
        <PlaceholderContainer>{placeholder}</PlaceholderContainer>
      )}
      {animatedPlaceholder && (
        <AnimatedPlaceholder
          animate={{
            y: isFocused ? 0 : '50%',
            x: isFocused ? 6 : 12,
            fontSize: isFocused ? '12px' : '14px',
          }}
        >
          {placeholder} {required && <RequiredSpan>*</RequiredSpan>}
        </AnimatedPlaceholder>
      )}
      {append}
    </InputContainer>
  );
};

export default Input;
