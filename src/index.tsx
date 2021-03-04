import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";

const rootEl = document.getElementById("root");

render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
, rootEl);
