import { RefObject, useEffect } from "react";

export const useOutsideClick = (ref: RefObject<any>, handler: Function) => {
  useEffect(() => {
    const listener = (event: any) => {
      const exception = document.querySelector('[data-exception="true"]');
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      if (exception?.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
