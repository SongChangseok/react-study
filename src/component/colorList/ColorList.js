import React from "react";
import Color from "./Color";
import { useColors } from "../hooks/color-hooks";

// export default function ColorList({ colors = [], onRemoveColor = f => f, onRateColor = f => f }) {
export default function ColorList() {
  const { colors } = useColors();
  if (!colors.length) return <div>표시할 색이 없습니다.</div>;
  return (
    <div className="color=-list">
      {colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          // onRemove={onRemoveColor}
          // onRate={onRateColor}
        />
      ))}
    </div>
  );
}
