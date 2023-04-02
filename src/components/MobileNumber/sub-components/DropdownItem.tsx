import React, { useContext } from 'react';
import styled from 'styled-components';

import { Country } from '../../../types';
import { MobileNumberContext } from '../MobileNumber';

interface DropdownItemProps {
  country: Country;
  dialCode: string;
}

const CountryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  grid-auto-flow: column;
  gap: 0 0.5rem;
  align-items: center;
  border-top: 1px solid rgb(229 231 235);
  padding: 0 0.5rem;
  cursor: pointer;
`;

const FlagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 0.25rem;
  grid-column: span 2 / span 2;
`;

const Flag = styled.img`
  width: 1.25rem;
  height: 1.2rem;
  object-fit: fill;
  border-radius: 100%;
`;

const DialCode = styled.span`
  font-size: 0.875rem;
  color: rgb(107 114 128);
`;

const CountryName = styled.p`
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: start;
  font-size: 0.875rem;
  padding-left: 0.5rem;
  grid-column: span 8 / span 8;
`;

const DropdownItem = ({ country, dialCode }: DropdownItemProps) => {
  const { setSelectedCountry, setisOpen, dropdownMenuListItemProps } =
    useContext(MobileNumberContext);
  const handleSelect = () => {
    setSelectedCountry && setSelectedCountry(dialCode);
    setisOpen(false);
  };
  return (
    <CountryContainer {...dropdownMenuListItemProps} onClick={handleSelect}>
      <FlagContainer>
        <Flag src={country.flags.png} />
        <DialCode>{dialCode}</DialCode>
      </FlagContainer>
      <CountryName>{country.name.common}</CountryName>
    </CountryContainer>
  );
};

export default DropdownItem;
