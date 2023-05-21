import React, { useState } from 'react';

import { MobileNumber } from './MobileNumber';

export default {
  title: 'Button',
  component: MobileNumber,
};

export const Default = () => {
  const [phoneNumber, setphoneNumber] = useState('1234');
  const [selectedCountryDialCode, setselectedCountryDialCode] =
    useState('+965');

  return (
    <div className="">
      <MobileNumber
        value={{ phoneNumber: phoneNumber, dialCode: selectedCountryDialCode }}
        onPhoneNumberChange={(phoneNumber) => {
          setphoneNumber(phoneNumber);
        }}
        onCountryChange={(dialCode) => {
          setselectedCountryDialCode(dialCode);
        }}
        inputProps={{ placeholder: 'asdasd', required: true }}
        append={<span className="flex items-center text-xs px-2">@</span>}
        required
      />
      {selectedCountryDialCode}
      {phoneNumber}
    </div>
  );
};

export const DropdownDisabled = () => {
  const [phoneNumber, setphoneNumber] = useState('1234');
  const [selectedCountryDialCode, setselectedCountryDialCode] =
    useState('+965');

  return (
    <div className="">
      <MobileNumber
        value={{ phoneNumber: phoneNumber, dialCode: selectedCountryDialCode }}
        onPhoneNumberChange={(phoneNumber) => {
          setphoneNumber(phoneNumber);
        }}
        onCountryChange={(dialCode) => {
          setselectedCountryDialCode(dialCode);
        }}
        disableDropdown
        append={<span className="flex items-center text-xs px-2">@</span>}
      />
      {selectedCountryDialCode}
      {phoneNumber}
    </div>
  );
};

export const AnimatedPlaceholder = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [selectedCountryDialCode, setselectedCountryDialCode] =
    useState('+965');

  return (
    <div className="">
      <MobileNumber
        value={{ phoneNumber: phoneNumber, dialCode: selectedCountryDialCode }}
        onPhoneNumberChange={(phoneNumber) => {
          setphoneNumber(phoneNumber);
        }}
        onCountryChange={(dialCode) => {
          setselectedCountryDialCode(dialCode);
        }}
        disableDropdown
        animatedPlaceholder
        append={<span className="flex items-center text-xs px-2">@</span>}
      />
      {selectedCountryDialCode}
      {phoneNumber}
    </div>
  );
};
