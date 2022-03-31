import React, { createContext, useContext, useState } from "react";
import colorData from "../colorList/color-data.json";
import { v4 } from "uuid";

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export function ColorProvider({ children }) {
    const [colors, setColors] = useState(colorData.colors);

    const addColor = (title, color) =>
        setColors([
            ...colors,
            {
                id: v4(),
                rating: 0,
                title,
                color
            }
        ]);

    const rateColor = (id, rating) =>
        setColors(
            colors.map(color => color.id === id ? { ...color, rating } : color)
        );
    
    const removeColor = id => setColors(colors.filter(color => color.id !== id));

    return (
        <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
            {children}
        </ColorContext.Provider>
    )
}