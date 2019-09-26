import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';

const WrapperStyled = styled.div`
  height: 100vh;
  background: #00a7e1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <WrapperStyled>
      {children}
    </WrapperStyled>
  </ThemeProvider>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
