import React, { useEffect, useState } from "react";
import { loadJSON, saveJSON } from "../common/Storage"

export default function GitHubUser({ login }) {
    const key = `user:${login}`;
    const [data, setData] = useState(loadJSON(key));

    console.log('data', data);

    useEffect(() => {
        if(!data) return;
        if(data.login === login) return;

        console.log("run saveJSON");
        const { name, avatar_url, location } = data;
        saveJSON(key, {
            name,
            login,
            avatar_url,
            location
        });
    }, [data]);

    useEffect(() => {
        if(!login) return;
        if(data && data.login === login) return;

        console.log("run fetch");
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, [login]);

    if(data)
        return <pre>{JSON.stringify(data, null, 2)}</pre>;

    return null;
}