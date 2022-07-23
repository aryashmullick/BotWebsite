import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./Footer";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
const footer = ReactDOM.createRoot(document.getElementById("footer"));
footer.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);
