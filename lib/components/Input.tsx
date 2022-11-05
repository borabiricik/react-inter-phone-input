import styled from "styled-components";
const StyledInput = styled.input`
  border: none;
  border-radius: 6px;
  background-color: red;
  flex: 1 1 0%;
`;

const Input = () => {
  return <StyledInput type="text" />;
};

export default Input;
