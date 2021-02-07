import "./bootstrap";
import "fontsource-roboto";

import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";

import { CssBaseline } from "@material-ui/core";
import Homepage from './React/pages';
import React from "react";
import ReactDOM from "react-dom";
import theme from "./React/utils/theme";

const App = () => (
    <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
            <Homepage />

            <CssBaseline />
        </ThemeProvider>
    </StylesProvider>
);

// Inject the React App to the '#app' DOM element.
ReactDOM.render(<App />, document.getElementById("app"));
