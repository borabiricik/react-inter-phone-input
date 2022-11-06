import { ICountry, ISelectedCountry } from "lib/types/main";
import { useState } from "react";
import PhoneInput from "react-inter-phone-input";
import "./app-style.css";

function App() {
  const [selectedCountry, setselectedCountry] =
    useState<ISelectedCountry | null>(null);
  return (
    <div className="">
      <PhoneInput onCountryChange={(country) => setselectedCountry(country)} />
      <div>
        <h1 className="text-xl">Selected country</h1>
        {selectedCountry && JSON.stringify(selectedCountry)}
      </div>
    </div>
  );
}

export default App;
