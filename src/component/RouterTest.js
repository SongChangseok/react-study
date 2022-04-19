import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import {
  About,
  Contact,
  Events,
  History,
  Home,
  Location,
  Products,
  Services,
  Whoops404
} from "./website/pages";

function Tree() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />

        {/* <Redirect from="services" to="about/services" /> v6부터 Redirect 삭제됨, Navigate로 변경됨 */}
        <Route
          path="services"
          element={<Navigate to="about/services" replace />}
        />
      </Routes>
    </div>
  );
}

export default function RouterTest() {
  return (
    <Router>
      <Tree />
    </Router>
  );
}
