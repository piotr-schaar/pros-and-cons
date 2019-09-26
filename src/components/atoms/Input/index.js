import styled from "styled-components";

const Input = styled.input`
  display: block;
  padding: 10px;
  border: none;
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.darkBlue};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
`;

export default Input;
