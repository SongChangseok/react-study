import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import AddColorForm from "./colorList/AddColorForm";
import ColorList from "./colorList/ColorList";
import { ColorProvider } from "./hooks/color-hooks";
import { ColorDetails } from "./colorList/ColorDetails";

const Test = () => {
  return (
    <ColorProvider>
      <AddColorForm />
      <Routes>
        <Route path="/" element={<ColorList />} />
        <Route path=":id" element={<ColorDetails />} />
      </Routes>
    </ColorProvider>
  );
};

export default function ReouterTest2() {
  return (
    <Router>
      <Test />
    </Router>
  );
}
