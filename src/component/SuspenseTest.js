import React, { useState } from "react";
import Agreement from "./suspenseTest/Agreement";
import Main from "./suspenseTest/Main"

export default function SuspenseTest() {
    const [agree, setAgree] = useState(false);

    if (!agree)
        return <Agreement onAgree={() => setAgree(true)} />;

    return <Main/>;
}