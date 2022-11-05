import { useState } from "react";
import PhoneInput from "react-inter-phone-input";
import "./app-style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 10 }}>
      <PhoneInput />
    </div>
  );
}

export default App;
