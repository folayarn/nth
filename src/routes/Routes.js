import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/homepage/Dashboard";
import About from "../pages/about/About";
import Help from "../pages/help/Help";
import News from "../pages/news/News";
import Layout from "../Layout/Layout";
import Usefultools from "../pages/usefultools/Usefultools";
import Organisations from "../pages/organisations/Organisations";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="Organisations" element={<Organisations />} />
          <Route path="Usefultool" element={<Usefultools />} />
          <Route path="News" element={<News />} />
          <Route path="Help" element={<Help />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
