import React from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "styled-components";
import globalColors from "./assets/colors/global";
import GlobalStyle from "./style";

const App = () => {
  return (
    <ThemeProvider theme={globalColors}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
