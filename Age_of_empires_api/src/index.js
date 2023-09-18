import React from "react";
import "./index.css"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Civilization from "./civilizacion";
import Contact from "./contact";
import Navbar from "./navbar"
import { civilizations } from './api/civilizations';
import { createServer } from 'miragejs';

if (window.server) {
  window.server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("/api/civilizations", () => {
      return civilizations;
    })
  },
})

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
