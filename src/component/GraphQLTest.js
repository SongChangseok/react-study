import { GraphQLClient } from "graphql-request";

const query = `
    query findRepos($login:String!) {
        user(login:$login) {
            login
            name
            location
            avatar_url: avatarUrl
            repositories(first: 100) {
                totalCount
                nodes {
                    name
                }
            }
        }
    }
`;

const client = new GraphQLClient("https://api.github.com/graphQL", {
  headers: {
    Authorization: `Bearer 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`
  }
});

export default function GraphQLTest() {
  client
    .request(query, { login: "songchangseok" })
    .then((results) => JSON.stringify(results, null, 2))
    .then(console.log)
    .catch(console.error);
  return <></>;
}
