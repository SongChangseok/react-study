import React, { useEffect, useState } from "react";
import { loadJSON, saveJSON } from "../common/Storage"

export default function GitHubUser({ login }) {
    const key = `user:${login}`;
    const [data, setData] = useState(loadJSON(key));
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(console.error);
    }, [login]);

    if(loading) return <h1>loading...</h1>;
    if(error)
        return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if(!data)
        return null;

    return (
        <div className="githubUser">
            <img
                src={data.avatar_url}
                alt={data.login}
                style={{ width: 200 }}
            />
            <div>
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
        </div>
    );
}