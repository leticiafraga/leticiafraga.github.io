import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
