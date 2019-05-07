import React, { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';

const DataContext = React.createContext();

// globally shared data
const DataProvider = ({ children }) => {
  const [menuIsOpen, toggleMenu] = useState(false);

  return (
    <DataContext.Provider value={{ menuIsOpen, toggleMenu }}>
      {children}
    </DataContext.Provider>
  );
};

// global theme and styling
const StylesProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
);

const Providers = ({ children }) => (
  <DataProvider>
    <ParallaxProvider>
      <StylesProvider>{children}</StylesProvider>
    </ParallaxProvider>
  </DataProvider>
);

export { DataContext };
export default Providers;
