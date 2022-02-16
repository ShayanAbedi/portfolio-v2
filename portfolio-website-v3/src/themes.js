import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#0a192f",
  fontColor: "#708090",
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "IBM Plex Mono", monospace;
    line-height: 1.7cm;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
    transition: ease-in 0.5s;
  }
  button {
    color: ${(props) => props.theme.fontColor};
  }
  svg {
    color: ${(props) => props.theme.fontColor};
    transition: ease-in-out 0.5s;
  }

`;
