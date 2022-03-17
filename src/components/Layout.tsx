import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;500&family=Ubuntu:wght@400;700&display=swap');
  
  :root {
    --font-header: "Fredoka", sans-serif;
    --font-body: "Ubuntu", sans-serif;
    --body-padding: 32px;
    --header-color: hsl(326deg 38% 50%);
    --accent-color: hsl(213deg 68% 57%);
    --accent-alt-color: hsl(95deg 81% 47%);
  }

  body {
    font-family: var(--font-body);
    color: hsl(0, 0%, 94%);
    font-size: 16px;
    padding: 0 var(--body-padding);
  }
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
};

export default Layout;
