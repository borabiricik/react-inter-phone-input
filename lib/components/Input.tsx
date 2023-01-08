import { PhoneInputContext } from "lib/context/PhoneInputContext";
import { classNames } from "lib/utils/classNames";
import { LegacyRef, useContext } from "react";
import MaskedInput from "react-text-mask";

const Input = () => {
  const { onInputChange, setphoneNumber, onChange, selectedCountry } =
    useContext(PhoneInputContext);
  const { inputProps = {} } = useContext(PhoneInputContext);
  const {
    className: inputClassName = "",
    value,
    placeholder,
    ref,
    ...rest
  } = inputProps;
  return (
    <MaskedInput
      mask={[
        /[1-9]/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      ref={ref as LegacyRef<MaskedInput>}
      guide={false}
      value={value ? (value as string) : undefined}
      placeholder={placeholder}
      keepCharPositions
      onChange={(e) => {
        setphoneNumber(e.target.value);
        onInputChange && onInputChange(e.target.value.replaceAll(" ", ""));
        onChange &&
          onChange(selectedCountry, e.target.value.replaceAll(" ", ""));
      }}
      className={classNames("border-none flex-1 outline-none", inputClassName)}
      {...rest}
    />
  );
};

export default Input;
