import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#708090",
};

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "IBM Plex Mono", monospace;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
  }
  svg {
    color: ${(props) => props.theme.fontColor};
  }
`;
