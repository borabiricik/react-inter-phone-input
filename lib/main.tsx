import React, { createContext } from "react";
import Input from "./components/Input";
import "./styles/global.css";
import { IPhoneInputProps } from "./types/main";
import styled from "styled-components";
import Dropdown from "./components/Dropdown";

export const PhoneInputContext = createContext({});

const PhoneInputContainer = styled.div`
  border: 1px solid black;
  border-radius: 6px;
  display: flex;
  align-items: stretch;
`;

const PhoneInput = ({ ...props }: IPhoneInputProps) => {
  return (
    <PhoneInputContext.Provider value={{ ...props }}>
      <PhoneInputContainer>
        <Dropdown />
        <Input />
      </PhoneInputContainer>
    </PhoneInputContext.Provider>
  );
};

export default PhoneInput;
