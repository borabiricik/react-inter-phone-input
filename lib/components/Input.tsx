import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { useContext } from "react";
import { createDefaultMaskGenerator, MaskedInput } from "react-hook-mask";

const Input = () => {
  const {
    onInputChange,
    phoneNumber,
    setphoneNumber,
    onChange,
    selectedCountry,
  } = useContext(PhoneInputContext);
  const maskGenerator = createDefaultMaskGenerator("999 999 999999");
  return (
    <MaskedInput
      value={phoneNumber}
      maskGenerator={maskGenerator}
      onChange={(value) => {
        setphoneNumber(value);
        onInputChange && onInputChange(value);
        onChange && onChange(selectedCountry, value);
      }}
      className="border-none flex-1 outline-none bg-transparent"
      type="tel"
    />
  );
};

export default Input;
