import classNames from 'classnames';
import React, { MouseEvent, useContext, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';

import ChevronUpSVG from '../../../assets/images/ChevronUpSVG';
import { theme } from '../../../assets/theme';
import { useOnClickOutside } from '../../../hooks/useOutsideClick';
import { findInCountries } from '../../../lib/utils';
import { DropdownProps } from '../../../types/MobileNumber';
import { MobileNumberContext } from '../MobileNumber';
import DropdownMenu from './DropdownMenu';

const DropdownContainer = styled.div`
  z-index: 2;
  position: relative;
`;

const DropdownButton = styled.button`
  min-width: 90px;
  padding: 8px 12px;
  background-color: #eff4f7;
  display: flex;
  align-items: center;
  gap: 0px 10px;
  border: none;
  border-right: 1px solid #b5b5c3;
  cursor: pointer;
`;

const CountryContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0px 3px;
`;

const CountryImage = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: fill;
  border-radius: 50%;
`;

const DialCode = styled.span`
  color: #212121;
`;

const Arrow = styled(ChevronUpSVG)`
  width: 0.8125rem;
  height: 0.8125rem;
  transition: all 0.3s;
  fill: ${theme.colors.fadingSunset};
  width: 0.625rem;
  height: 0.625rem;
`;

const Dropdown = (props: DropdownProps) => {
  const { className = '', onClick, ...restProps } = props;

  const {
    countries,
    selectedCountry,
    setisOpen,
    isOpen,
    disableDropdown = false,
  } = useContext(MobileNumberContext);
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const outsideClickRef = useRef(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(e);
    !disableDropdown && setisOpen((prev) => !prev);
  };

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
    modifiers: [{ name: 'offset', options: { offset: [0, 3] } }],
  });

  const foundCountry = findInCountries(countries, selectedCountry);

  useOnClickOutside(outsideClickRef, () => {
    setisOpen(false);
  });

  return (
    <div ref={outsideClickRef}>
      <DropdownButton
        ref={setReferenceElement}
        className={classNames(className)}
        onClick={handleClick}
        type="button"
        {...restProps}
      >
        {foundCountry ? (
          <>
            <CountryContainer>
              <CountryImage src={foundCountry.flags.png} />
              <DialCode>{selectedCountry}</DialCode>
            </CountryContainer>
            {!disableDropdown && (
              <Arrow
                style={{
                  rotate: isOpen ? '' : '180deg',
                }}
              />
            )}
          </>
        ) : (
          'Country not found'
        )}
      </DropdownButton>
      {isOpen && (
        <DropdownContainer
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <DropdownMenu />
        </DropdownContainer>
      )}
    </div>
  );
};

export default Dropdown;
