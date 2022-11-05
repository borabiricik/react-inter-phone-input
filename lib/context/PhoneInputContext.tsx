import { IPhoneInputContextProps } from "lib/types/main";
import { createContext } from "react";

export const PhoneInputContext = createContext<IPhoneInputContextProps>({
  countries: [],
});
