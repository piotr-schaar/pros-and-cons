import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.white};
  padding: ${({ p }) => (p ? `${p}px` : '25px')};
  border-radius: 15px;
`;

export default Card;
