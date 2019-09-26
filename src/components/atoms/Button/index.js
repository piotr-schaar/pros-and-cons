import styled from "styled-components";

const Button = styled.button`
  display: ${({ hidden }) => (hidden ? "none" : "auto")};
`;

export default Button;
