import { motion } from "framer-motion";
import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { classNames } from "lib/utils/classNames";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import DropdownMenu from "./DropdownMenu";
import ChevronDownSVG from "./icons/ChevronDownSVG";

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

  const { className: flagClassName = "", src, ...restFlagProps } = flagProps;

  return (
    <>
      <div
        {...restDropdownButtonProps}
        ref={setReferenceElement}
        onClick={(e) => {
          if (isCountrySelectEnabled) {
            setisDropdownOpen(!isDropdownOpen);
          }
          onClick && onClick(e);
        }}
        className={classNames(
          "cursor-pointer flex items-center rtl:space-x-reverse",
          dropdownButtonClassName
        )}
      >
        <div>
          {selectedCountry ? (
            <span className="flex items-center space-x-1 rtl:space-x-reverse">
              <img
                src={selectedCountry.flag}
                alt="Selected Country Flag"
                className={classNames("w-4 h-4 object-fill", flagClassName)}
                {...restFlagProps}
              />
              <span>{selectedCountry.dialCode}</span>
            </span>
          ) : (
            placeholder
          )}
        </div>

        {isCountrySelectEnabled && (
          <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
            <ChevronDownSVG style={{ width: 12, height: 12 }} />
          </motion.div>
        )}
      </div>
      {createPortal(
        <DropdownMenu
          popperElement={popperElement}
          attributes={attributes}
          setPopperElement={setPopperElement}
          styles={styles}
        />,
        document.body
      )}
    </>
  );
};

export default Dropdown;
