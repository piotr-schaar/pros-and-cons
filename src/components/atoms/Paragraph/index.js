import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  opacity: ${({ opacity }) => (opacity ? `${opacity}` : 1)};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
`;

export default Paragraph;
