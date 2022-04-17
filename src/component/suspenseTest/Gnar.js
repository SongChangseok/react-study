import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function createResource(pending) {
    let error, response;
    pending.then(r => (response = r)).catch(e => (error = e));

    return {
        read() {
            if(error) throw error;
            if(response) return response;
            throw pending;
        }
    }
}

const promise = new Promise(resolvers =>
    setTimeout(() => resolvers({ gnar: "gnarly!" }), 3000)
)

const resource = createResource(promise);

function Gnar() {
    console.log("gnar");
    const result = resource.read();
    return <h1>Gnar: {result.gnar}</h1>
}

export default function GnarTest() {
    return(
        <Suspense fallback={<ClimbingBoxLoader/>}>
            <ErrorBoundary>
                <Gnar/>
            </ErrorBoundary>
        </Suspense>
    );
}