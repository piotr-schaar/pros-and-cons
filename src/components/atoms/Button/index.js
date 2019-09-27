import styled from "styled-components";

const Button = styled.button`
  display: ${({ hidden }) => (hidden ? "none" : "auto")};
  background: ${({theme}) => theme.yellow};
  padding: 15px 30px;
  border: 0;
  font-size: 22px;
  font-weight: 600;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export default Button;
