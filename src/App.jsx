import React from "react";
import Router from "./routes/Router";
import {ThemeProvider} from "styled-components";
import colors from "./assets/colors";
import GlobalStyle from "./style";
import {ColorsProvider} from "./contexts/ColorsContext";

const App = () => {
    return (
        <ThemeProvider theme={colors}>
            <ColorsProvider>
                <GlobalStyle/>
                <Router/>
            </ColorsProvider>
        </ThemeProvider>
    );
};

export default App;
