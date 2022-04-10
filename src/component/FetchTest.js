import React, { useState } from "react";
import GitHubUser from "./githubUser/GitHubUser";
import SearchForm from "./githubUser/SearchForm";
import RepositoryReadme from "./repoMenu/ReopsitoryReadme";
import UserRepositories from "./repoMenu/UserRepositories";

export default function FetchTest() {
    const [login, setLogin] = useState();
    const [repo, setRepo] = useState();

    return (
        <>
            <SearchForm onSearch={setLogin} />
            {login && <GitHubUser login={login} />}
            {login && <UserRepositories
                login={login}
                repo={repo}
                onSelect={setRepo}
            />}
            {login && repo && (
                <RepositoryReadme login={login} repo={repo} />
            )}
        </>
    );
}