import type { NextPage } from 'next';
import { useState } from 'react';
import { MobileNumber } from 'react-inter-phone-input';

const Home: NextPage = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [selectedCountry, setselectedCountry] = useState('+965');
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
