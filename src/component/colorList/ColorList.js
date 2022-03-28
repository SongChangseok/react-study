import React from "react";
import Color from "./Color";

export default function ColorList({ colors = [], onRemoveColor = f => f }) {
    if(!colors.length) return <div>표시할 색이 없습니다.</div>;
    return (
        <>
            { colors.map(color => 
                <Color key={color.id} {...color} onRemove={onRemoveColor} /> 
            )}
        </>
    );
}