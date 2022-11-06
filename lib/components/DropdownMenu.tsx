import { AnimatePresence, motion } from "framer-motion";
import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { IDropdownMenuProps } from "lib/types/Dropdown";
import { useContext } from "react";
import Countries from "./Countries";

const DropdownMenu = ({
  setPopperElement,
  styles,
  attributes,
}: IDropdownMenuProps) => {
  const { isDropdownOpen } = useContext(PhoneInputContext);
  return (
    <AnimatePresence>
      {isDropdownOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <motion.div
            className="overflow-scroll max-h-[200px] flex flex-col scrollbar-hide bg-white"
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
