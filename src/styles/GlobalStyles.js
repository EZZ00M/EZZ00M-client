import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --font-family: sans-serif;

  --main-blue: rgb(85, 72, 255);
  --main-white: #ffffff;

  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}

* {
  scroll-behavior: smooth;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 14px;
}

body {
  font-family: var(--font-family);
  background-color: var(--background-gray);
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default GlobalStyles;
