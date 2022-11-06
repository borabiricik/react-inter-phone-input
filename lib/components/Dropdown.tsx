import { motion } from "framer-motion";
import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { useOutsideClick } from "lib/hooks/useOutsideClick";
import { classNames } from "lib/utils/classNames";
import { useContext, useRef, useState } from "react";
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
          offset: [0, 10],
        },
      },
    ],
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => setisDropdownOpen(false));

  const {
    className: dropdownButtonClassName = "",
    ref = null,
    onClick,
    ...restDropdownButtonProps
  } = dropdownButtonProps;

  return (
    <div ref={containerRef}>
      <div
        {...restDropdownButtonProps}
        ref={setReferenceElement}
        onClick={(e) => {
          setisDropdownOpen(!isDropdownOpen);
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
                alt=""
                className="w-4 h-4 object-cover"
              />
              <span>{selectedCountry.dialCode}</span>
            </span>
          ) : (
            "Select"
          )}
        </div>

        <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
          <ChevronDownSVG style={{ width: 12, height: 12 }} />
        </motion.div>
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
    </div>
  );
};

export default Dropdown;
