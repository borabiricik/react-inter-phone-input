import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import ChevronDownSVG from "./icons/ChevronDownSVG";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = () => {
  const { countries } = useContext(PhoneInputContext);
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
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
        className="cursor-pointer flex items-center space-x-4 rtl:space-x-reverse"
      >
        <span>Select</span>
        <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
          <ChevronDownSVG style={{ width: 12, height: 12 }} />
        </motion.div>
      </div>
      {createPortal(
        <AnimatePresence exitBeforeEnter>
          {isDropdownOpen && (
            <div
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
            >
              <motion.div
                key={"asd"}
                className="bg-red-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Popper
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Dropdown;
