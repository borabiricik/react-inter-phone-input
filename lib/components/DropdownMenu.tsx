import { AnimatePresence, motion } from "framer-motion";
import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { useOutsideClick } from "lib/hooks/useOutsideClick";
import { IDropdownMenuProps } from "lib/types/Dropdown";
import { classNames } from "lib/utils/classNames";
import { useContext, useRef } from "react";
import Countries from "./Countries";
import Search from "./Search";

const DropdownMenu = ({
  setPopperElement,
  styles,
  attributes,
}: IDropdownMenuProps) => {
  const {
    isDropdownOpen,
    dropdownProps = {},
    isSearchable = true,
    setisDropdownOpen,
    dropdownMenuContainerProps = {},
  } = useContext(PhoneInputContext);
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
  const {
    className: dropdownMenuContainerClassName = "",
    style,
    ref: trashRef,
  } = dropdownMenuContainerProps;
  const containerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, () => {
    if (isDropdownOpen) {
      setisDropdownOpen(false);
    }
  });
  return (
    <AnimatePresence>
      {isDropdownOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          data-target="dropdown-menu"
          className={classNames(dropdownMenuContainerClassName)}
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
            ref={containerRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            {...restDropdownProps}
          >
            {isSearchable && <Search />}
            <Countries />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
