import React from "react";
import "./index.css"
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Civilization from "./civilizacion";
import Contact from "./contact";
import Navbar from "./navbar"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="civilizaciones" element={<Civilization />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
