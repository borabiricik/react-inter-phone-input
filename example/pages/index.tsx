import type { NextPage } from 'next';
import { useState } from 'react';
import { MobileNumber } from 'react-inter-phone-input-2';

const Home: NextPage = () => {
  const [phoneNumber, setphoneNumber] = useState('965');
  const [selectedCountry, setselectedCountry] = useState('+90');
  return (
    <div>
      <MobileNumber
        value={{
          dialCode: selectedCountry,
          phoneNumber,
        }}
        onPhoneNumberChange={(number) => setphoneNumber(number)}
        onCountryChange={(dialCode) => setselectedCountry(dialCode)}
      />
    </div>
  );
};

export default Home;
