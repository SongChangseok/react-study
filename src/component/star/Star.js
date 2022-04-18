import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ selected = false, onSelect = (f) => f }) {
  return (
    <>
      <h1>Star</h1>
      <FaStar id="star" color={selected ? "red" : "grey"} onClick={onSelect} />
    </>
  );
}
