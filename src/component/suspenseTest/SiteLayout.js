import React from "react";

const style = {
    "display": "flex"
};
const menuStyle = {
    "backgroundColor": "red",
    "width": "50%"
}
const childStyle = {
    "backgroundColor": "yellow",
    "width": "50%"
}

export default function SiteLayout({
    children,
    menu = c => null
}) {
    return (
        <div className="site-container" style={style}>
            <div style={menuStyle}>{menu}</div>
            <div style={childStyle}>{children}</div>
        </div>
    );
}