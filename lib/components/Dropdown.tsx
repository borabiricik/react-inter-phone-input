import { motion } from "framer-motion";
import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { classNames } from "lib/utils/classNames";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import styled from "styled-components";
import DropdownMenu from "./DropdownMenu";
import ChevronDownSVG from "./icons/ChevronDownSVG";

const DropdownButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;
`;

const SelectedCountry = styled.span`
  display: flex;
  align-items: center;
  gap: 4px normal;
`;

const SelectedCountryFlag = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: fill;
`;

const Dropdown = () => {
  const {
    isDropdownOpen,
    setisDropdownOpen,
    selectedCountry,
    dropdownButtonProps = {},
    flagProps = {},
    isCountrySelectEnabled = true,
  } = useContext(PhoneInputContext);

  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
    modifiers: [
      {
        name: "offset",
        enabled: true,
        options: {
          offset: [0, 5],
        },
      },
    ],
  });

  const {
    className: dropdownButtonClassName = "",
    ref = null,
    onClick,
    placeholder,

    ...restDropdownButtonProps
  } = dropdownButtonProps;

  const {
    className: flagClassName = "",
    src,
    ref: trashRef,
    ...restFlagProps
  } = flagProps;

  return (
    <div>
      <DropdownButton
        {...restDropdownButtonProps}
        ref={setReferenceElement}
        onClick={(e) => {
          if (isCountrySelectEnabled) {
            setisDropdownOpen(!isDropdownOpen);
          }
          onClick && onClick(e);
        }}
        data-exception="true"
        className={classNames(dropdownButtonClassName)}
      >
        <div>
          {selectedCountry ? (
            <SelectedCountry>
              <SelectedCountryFlag
                src={selectedCountry.flag}
                alt="Selected Country Flag"
                className={classNames(flagClassName)}
                {...restFlagProps}
              />
              <span>{selectedCountry.dialCode}</span>
            </SelectedCountry>
          ) : (
            placeholder
          )}
        </div>

        {isCountrySelectEnabled && (
          <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
            <ChevronDownSVG style={{ width: 12, height: 12 }} />
          </motion.div>
        )}
      </DropdownButton>
      {createPortal(
        <div>
          <DropdownMenu
            popperElement={popperElement}
            attributes={attributes}
            setPopperElement={setPopperElement}
            styles={styles}
          />
        </div>,
        document.body
      )}
    </div>
  );
};

export default Dropdown;
