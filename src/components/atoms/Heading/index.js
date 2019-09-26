import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0;
  padding: 0;
  font-size: ${({ theme, big }) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};
  padding-top: ${({ pt }) => (pt ? `${pt}px` : 0)};
`;

export default Heading;
