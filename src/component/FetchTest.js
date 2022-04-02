import React from "react";
import GitHubUser from "./githubUser/GitHubUser";

export default function FetchTest() {
    const login = "SongChangSeok";

    return (
        <GitHubUser login={login} />
    );
}