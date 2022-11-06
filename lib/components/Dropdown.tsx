import { motion } from "framer-motion";
import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import DropdownMenu from "./DropdownMenu";
import ChevronDownSVG from "./icons/ChevronDownSVG";

const Dropdown = () => {
  const { isDropdownOpen, setisDropdownOpen, selectedCountry } =
    useContext(PhoneInputContext);

  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
  });

  return (
    <>
      <div
        ref={setReferenceElement}
        onClick={() => setisDropdownOpen(!isDropdownOpen)}
        className="cursor-pointer flex items-center space-x-4 rtl:space-x-reverse transition-all"
      >
        <span> {selectedCountry ? selectedCountry.name : "Select"}</span>

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
    </>
  );
};

export default Dropdown;
