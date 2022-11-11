import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { classNames } from "lib/utils/classNames";
import { useContext } from "react";

const Input = () => {
  const {
    onInputChange,
    phoneNumber,
    setphoneNumber,
    onChange,
    selectedCountry,
  } = useContext(PhoneInputContext);
  const { inputProps = {} } = useContext(PhoneInputContext);
  const { className: inputClassName = "", value, placeholder } = inputProps;
  return (
    <input
      value={value ? (value as string) : phoneNumber}
      placeholder={placeholder}
      type="number"
      onChange={(e) => {
        setphoneNumber(value);
        onInputChange && onInputChange(e.target.value);
        onChange && onChange(selectedCountry, e.target.value);
      }}
      className={classNames("border-none flex-1 outline-none", inputClassName)}
    />
  );
};

export default Input;
