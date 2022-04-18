import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

// const loadStatus = () => "success - ready";
// const loadStatus = () => {
//     throw new Error("test");
// };
// const loadStatus = () => {
//     throw new Promise(resolves => null);
// };
// const loadStatus = () => {
//     console.log("load status");
//     throw new Promise(resolvers => setTimeout(resolvers, 3000));
// }
const loadStatus = (() => {
  let error, response;
  const promise = new Promise((resolvers) => setTimeout(resolvers, 3000))
    .then(() => (response = "success"))
    .catch((e) => (error = e));

  return () => {
    if (error) throw error;
    if (response) return response;
    throw promise;
  };
})();

// function safe(fn) {
//     try {
//         fn();
//     } catch(error) {
//         if(error instanceof Promise) {
//             error.then(() => safe(fn));
//         } else {
//             throw error;
//         }
//     }
// }
//  safe(loadStatus)

function Status() {
  const status = loadStatus();
  return <h1>status: {status}</h1>;
}

export default function StatusTest() {
  return (
    <Suspense fallback={<ClimbingBoxLoader />}>
      <ErrorBoundary>
        <Status />
      </ErrorBoundary>
    </Suspense>
  );
}
