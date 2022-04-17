import React from "react";
import ColorList from "./colorList/ColorList";
import AddColorForm from "./colorList/AddColorForm";
import { ColorProvider } from "./hooks/color-hooks";
// import { v4 } from "uuid";

export default function ColorListTest() {
  // const [colors, setColors] = useState(colorData.colors);
  return (
    <ColorProvider>
      <AddColorForm />
      <ColorList />
      {/* <AddColorForm
                onNewColor={(title, color) => {
                    const newColors = [
                        ...colors,
                        {
                            id: v4(),
                            rating: 0,
                            title,
                            color
                        }
                    ];
                    setColors(newColors);
                }}
            />
            <ColorList 
                colors={colors}
                onRemoveColor={id => {
                    const newColors = colors.filter(color => color.id !== id)
                    setColors(newColors);
                }}
                onRateColor={(id, rating) => {
                    const newColors = colors.map(color => 
                        color.id === id ? { ...color, rating } : color
                    );
                    setColors(newColors);
                }}
            /> */}
    </ColorProvider>
  );
}
