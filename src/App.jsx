import React from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "styled-components";
import colors from "./assets/colors";
import GlobalStyle from "./style";

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
