import { AnimatePresence, motion } from "framer-motion";
import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { IDropdownMenuProps } from "lib/types/Dropdown";
import { classNames } from "lib/utils/classNames";
import { useContext } from "react";
import Countries from "./Countries";

const DropdownMenu = ({
  setPopperElement,
  styles,
  attributes,
}: IDropdownMenuProps) => {
  const { isDropdownOpen, dropdownProps = {} } = useContext(PhoneInputContext);
  const {
    className = "",
    onAnimationEnd,
    onAnimationStart,
    onDragStart,
    onDragEnd,
    onDrag,
    ref,
    ...restDropdownProps
  } = dropdownProps;
  return (
    <AnimatePresence>
      {isDropdownOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <motion.div
            className={classNames(
              "overflow-scroll max-h-[200px] flex flex-col scrollbar-hide bg-white",
              className
            )}
            transition={{
              duration: 0.2,
              delay: 0,
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            {...restDropdownProps}
          >
            <Countries />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
