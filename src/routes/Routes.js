import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/homepage/Dashboard";
import About from "../pages/about/About";
import Help from "../pages/help/Help";
import News from "../pages/news/News";
import Usefultools from "../pages/usefultools/Usefultools";
import Organisations from "../pages/organisations/Organisations";
import Header from "../Layout/Header";

function Router() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/Organisations" element={<Organisations/>} />
          <Route path="/Usefultool" element={<Usefultools/>} />
          <Route path="/News" element={<News />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
