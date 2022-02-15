import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Main from "./Main";
import Navbar from "./Navbar";

import { lightTheme, darkTheme, GlobalStyles } from "./themes";

const StyledApp = styled.div``;

const App = () => {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp className="App">
        <Navbar toggle={themeToggler} theme={theme} />
        <Main />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
