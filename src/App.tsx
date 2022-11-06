import { ISelectedCountry } from "lib/types/main";
import { useEffect, useState } from "react";
import PhoneInput from "react-inter-phone-input";
import "./app-style.css";

function App() {
  const [selectedCountry, setselectedCountry] =
    useState<ISelectedCountry | null>(null);
  const [phoneNumber, setphoneNumber] = useState("");
  const [onChangeCountry, setonChangeCountry] =
    useState<ISelectedCountry | null>(null);
  const [onChangePhoneNumber, setonChangePhoneNumber] = useState("");

  const [defaultCountry, setdefaultCountry] = useState("tr");

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
          className: "border border-[#B5B5C3] overflow-hidden rounded-md",
        }}
        dropdownButtonProps={{
          className:
            "bg-[#EFF4F7] space-x-[10px] rtl:space-x-reverse p-3 border-r border-[#B5B5C3]",
          placeholder: "Select Dial Code",
        }}
        flagProps={{ className: "w-4 h-4 rounded-full" }}
        inputProps={{
          value: phoneNumber,
          placeholder: "Phone Number",
          className: "px-3",
        }}
        defaultCountryCode={defaultCountry}
        dropdownProps={{
          className: "border border-[#B5B5C3] rounded-md space-y-2 p-2",
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
      <button
        onClick={() => setdefaultCountry(defaultCountry === "us" ? "tr" : "us")}
      >
        Toggle Country
      </button>
    </div>
  );
}

export default App;
