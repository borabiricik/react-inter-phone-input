import { ISelectedCountry } from "lib/types/main";
import { useState } from "react";
import PhoneInput from "react-inter-phone-input";
import "./app-style.css";

function App() {
  const [selectedCountry, setselectedCountry] =
    useState<ISelectedCountry | null>(null);
  const [phoneNumber, setphoneNumber] = useState("");
  const [onChangeCountry, setonChangeCountry] =
    useState<ISelectedCountry | null>(null);
  const [onChangePhoneNumber, setonChangePhoneNumber] = useState("");

  return (
    <div className="p-4">
      <PhoneInput
        onInputChange={(value) => setphoneNumber(value)}
        onCountryChange={(country) => setselectedCountry(country)}
        onChange={(country, phoneNumber) => {
          setonChangeCountry(country);
          setonChangePhoneNumber(phoneNumber);
        }}
        containerProps={{
          className: "border overflow-hidden rounded-md",
        }}
        dropdownButtonProps={{
          className: "bg-[#EFF4F7] space-x-[10px] rtl:space-x-reverse p-3",
          placeholder: "Select Dial Code",
        }}
        flagProps={{ className: "w-4 h-4 rounded-full" }}
        inputProps={{
          value: phoneNumber,
          placeholder: "Phone Number",
          className: "px-3",
        }}
      />

      <div className="text-xl">
        Selected country: {selectedCountry && JSON.stringify(selectedCountry)}
      </div>

      <div className="text-xl">Phone Number: {phoneNumber}</div>
      <div className="text-xl mt-5">
        With onChange Function:
        <div className="text-xl">
          Selected country: {onChangeCountry && JSON.stringify(onChangeCountry)}
        </div>
        <div className="text-xl">Phone Number: {onChangePhoneNumber}</div>
      </div>
    </div>
  );
}

export default App;
