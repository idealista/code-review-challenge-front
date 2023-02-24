import React from "react";
import ReactDOM from "react-dom/client";
import "./IoC/init";
import App from "../src/webapp";
import './assets/normalize.css';
import './assets/main.css';

const appNode = document.querySelector("#app");
const root = ReactDOM.createRoot(appNode);

root.render(<App />);
