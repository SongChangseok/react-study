import React from "react";

const style = {
    "border": "1px solid"
}

export default function Callout({ children }) {
    return (
        <div className="callout" style={style}>{children}</div>
    );
}