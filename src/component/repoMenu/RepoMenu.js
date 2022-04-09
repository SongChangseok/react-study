import React, { useEffect } from "react";
import { useIterator } from "../hooks/customeHooks";
import RepositoryReadme from "./ReopsitoryReadme";

export function RepoMenu({
    repositories,
    login,
    onSelect = f => f
}) {
    const [{name}, prev, next] = useIterator(repositories);

    useEffect(() => {
        if(!name) return;
        onSelect(name);
    }, [name]);

    return (
        <div style={{ display: "flex" }}>
            <button onClick={prev}>&lt;</button>
            <p>{name}</p>
            <button onClick={next}>&gt;</button>
            <RepositoryReadme login={login} repo={name} />
        </div>
    );
}