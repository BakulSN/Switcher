import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
  }
`;

export const lightTheme = {
  background: "#ffffff",
  text: "#000000",
  boxshadow: "0px 0px 30px 20px rgba(0, 0, 0, 0.5)",
};

export const darkTheme = {
  background: "rgb(26, 26, 64)",
  text: "#ffffff",
  boxshadow: "0px 0px 30px 20px rgb(161 161 161 / 50%)",
};
