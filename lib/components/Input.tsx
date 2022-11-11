import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { classNames } from "lib/utils/classNames";
import { useContext } from "react";
import MaskedInput from "react-text-mask";

const Input = () => {
  const { onInputChange, setphoneNumber, onChange, selectedCountry } =
    useContext(PhoneInputContext);
  const { inputProps = {} } = useContext(PhoneInputContext);
  const { className: inputClassName = "", value, placeholder } = inputProps;
  return (
    <MaskedInput
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      value={value ? (value as string) : undefined}
      placeholder={placeholder}
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
