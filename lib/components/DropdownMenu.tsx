import { AnimatePresence } from "framer-motion";
import { PhoneInputContext } from "lib/context/PhoneInputContext";
import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import Countries from "./Countries";
import { IDropdownMenuProps } from "lib/types/Dropdown";
import { useOutsideClick } from "lib/hooks/useOutsideClick";

const DropdownMenu = ({
  setPopperElement,
  styles,
  attributes,
  popperElement,
}: IDropdownMenuProps) => {
  const { isDropdownOpen, setisDropdownOpen } = useContext(PhoneInputContext);
  return (
    <AnimatePresence>
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
            <Countries />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
