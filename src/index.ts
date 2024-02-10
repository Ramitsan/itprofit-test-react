import React from "react";
import * as ReactDOM from "react-dom/client";
import App from './app';
import "./scss/style.scss";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(React.createElement(App, {}, null));
