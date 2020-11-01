import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { theme } from "./theme";

const app = (
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

ReactDOM.render(app, document.querySelector("#root"));
