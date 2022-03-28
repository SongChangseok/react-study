import React, { useState } from "react";
import colorData from "./colorList/color-data.json";
import ColorList from "./colorList/ColorList";

export default function ColorListTest() {
    const [colors, setColors] = useState(colorData.colors);
    return <ColorList 
                colors={colors}
                onRemoveColor={id => {
                    const newColors = colors.filter(color => color.id !== id)
                    setColors(newColors);
                }}
            />;
}