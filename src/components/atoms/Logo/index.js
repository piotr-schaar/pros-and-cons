import React from 'react';
import styled from 'styled-components';

const HeadingLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.yellow};
  font-weight: 700;
  text-transform: lowercase;
  text-align: center;
`;

const Logo = () => {
  return (
    <div>
      <HeadingLogo>Pros and cons</HeadingLogo>
    </div>
  );
};

export default Logo;
