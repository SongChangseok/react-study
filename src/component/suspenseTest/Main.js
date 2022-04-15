import React from "react";
import ErrorBoundary from "./ErrorBoundary";

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
const calloutStyle = {
    "border": "1px solid"
}


const SiteLayout = ({ children, menu = c => null }) => (
    <div className="site-container" style={style}>
        <div style={menuStyle}>{menu}</div>
        <div style={childStyle}>{children}</div>
    </div>
);

const Menu = () => (
    <ErrorBoundary>
        <p>Site Layout Menu</p>
    </ErrorBoundary>
);

const Callout = ({ children }) => (
    <ErrorBoundary>
        <div className="callout" style={calloutStyle}>{children}</div>
    </ErrorBoundary>
);

export default function Main() {
    return (
        <SiteLayout menu={<Menu/>}>
            <Callout>Welcome to the site</Callout>
            <ErrorBoundary>
                <h1>TODO: Home Page</h1>
                <p>Complete the main contents for this home page</p>
            </ErrorBoundary>
        </SiteLayout>
    );
}