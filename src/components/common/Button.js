// components/common/Button.js
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e50914;
  color: #ffffff;
  border: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f5131e;
  }

  &:disabled {
    background-color: #888888;
    cursor: not-allowed;
  }
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
