// components/common/Input.js
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #aaaaaa;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: #e50914;
    outline: none;
  }
`;

function Input({ ...props }) {
  return <StyledInput {...props} />;
}

export default Input;
