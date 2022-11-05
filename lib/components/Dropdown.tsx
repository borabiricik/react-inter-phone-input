import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import ChevronDownSVG from "./icons/ChevronDownSVG";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = () => {
  const { countries, isDropdownOpen, setisDropdownOpen } =
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
                className="overflow-scroll max-h-[200px] flex flex-col scrollbar-hide"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
              >
                {countries.map((country) => {
                  console.log(country);
                  return country.dialCode.suffixes?.map((suffix: string) => {
                    return (
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <img src={country.flag} className="w-5 h-5" alt="" />
                        <span>{country.name}</span>
                        <span>{`${country.dialCode.root} ${suffix}`}</span>
                      </div>
                    );
                  });
                })}
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
