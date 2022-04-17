import React from "react";
import { List } from "./common/commonComponent";

const array = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 }
];

export default function RenderPropTest() {
  return (
    <List
      data={array}
      renderEmpty={<p>This list is empty.</p>}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation.toLocaleString()}ft
        </>
      )}
    />
  );
}
