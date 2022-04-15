import React, { lazy, Suspense, useState } from "react";
import Agreement from "./suspenseTest/Agreement";
// import Main from "./suspenseTest/Main"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ErrorBoundary from "./suspenseTest/ErrorBoundary";

const Main = lazy(() => import("./suspenseTest/Main"));

export default function SuspenseTest() {
    const [agree, setAgree] = useState(false);

    if (!agree)
        return <Agreement onAgree={() => setAgree(true)} />;

    return (
        <ErrorBoundary>
            <Suspense fallback={<ClimbingBoxLoader/>}>
                <Main/>
            </Suspense>
        </ErrorBoundary>
    );
}