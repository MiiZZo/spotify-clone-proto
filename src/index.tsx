import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const app = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

ReactDOM.render(app, document.querySelector("#root"));
