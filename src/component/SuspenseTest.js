import React from "react";
import Callout from "./suspenseTest/Callout";
import ErrorBoundary from "./suspenseTest/ErrorBoundary";
import SiteLayout from "./suspenseTest/SiteLayout";

const BreakThings = () => {
    throw new Error("Test...");
}

const Test = () => {
    return (
        <SiteLayout 
            menu={
                <ErrorBoundary>
                    <p>Site Layout Menu</p>
                </ErrorBoundary>
            }
        >
            <>
            
                <ErrorBoundary>
                    <Callout>Callout</Callout>
                    <BreakThings/>
                </ErrorBoundary>
                <h1>Contents</h1>
                <p>This is the main part of the example layout</p>
            </>
        </SiteLayout>
    )
}

export default function SuspenseTest() {
    return (
        <Test/>
    );
}