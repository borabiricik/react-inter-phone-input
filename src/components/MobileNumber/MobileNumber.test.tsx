import { render } from '@testing-library/react';
import React from 'react';

import { MobileNumber } from './MobileNumber';

//TODO: Remove jest & add cypress

describe('Button', () => {
  it('should render button with text', () => {
    render(
      <MobileNumber
        onCountryChange={() => {
          console.log('here');
        }}
        onPhoneNumberChange={() => {
          console.log('here');
        }}
        value={{ dialCode: '+90', phoneNumber: '5554443322' }}
      />,
    );
  });
});
