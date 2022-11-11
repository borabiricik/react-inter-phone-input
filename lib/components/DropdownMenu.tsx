import { AnimatePresence, motion } from "framer-motion";
import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { useOutsideClick } from "lib/hooks/useOutsideClick";
import { IDropdownMenuProps } from "lib/types/Dropdown";
import { classNames } from "lib/utils/classNames";
import { useContext, useRef } from "react";
import styled from "styled-components";
import Countries from "./Countries";
import Search from "./Search";

const DropdownMenuContainer = styled(motion.div)`
  overflow: scroll;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  background-color: white;
  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

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
          <DropdownMenuContainer
            className={classNames(className)}
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
          </DropdownMenuContainer>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
