import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import ChevronDownSVG from "./icons/ChevronDownSVG";

const Dropdown = () => {
  const { countries } = useContext(PhoneInputContext);
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
  });

  console.log(popperElement, referenceElement);
  return (
    <>
      <div
        ref={setReferenceElement}
        onClick={() => setisDropdownOpen(!isDropdownOpen)}
        className="cursor-pointer flex items-center space-x-4 rtl:space-x-reverse"
      >
        <span>Select</span>
        <ChevronDownSVG style={{ width: 16, height: 16 }} />
      </div>
      {isDropdownOpen &&
        createPortal(
          <div
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            Popper
          </div>,
          document.body
        )}
    </>
  );
};

export default Dropdown;
