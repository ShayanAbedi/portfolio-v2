import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Work from "./Work";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles } from "./themes";
import Navbar from "./Navbar";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
