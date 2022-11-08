import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { classNames } from "lib/utils/classNames";
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
  const { inputProps = {} } = useContext(PhoneInputContext);
  const { className: inputClassName = "", value, placeholder } = inputProps;
  return (
    <MaskedInput
      value={value ? (value as string) : phoneNumber}
      placeholder={placeholder}
      maskGenerator={maskGenerator}
      onChange={(value) => {
        setphoneNumber(value);
        onInputChange && onInputChange(value);
        onChange && onChange(selectedCountry, value);
      }}
      className={classNames("border-none flex-1 outline-none", inputClassName)}
    />
  );
};

export default Input;
