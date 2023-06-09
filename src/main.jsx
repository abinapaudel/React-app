import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Navigation from "./routes/Navigation";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);
